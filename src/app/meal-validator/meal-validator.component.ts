import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, takeWhile } from 'rxjs/operators';
import { NutdataModel } from '../shared/models/nutdata.model';
import { SnippetModel } from '../shared/models/snippet.model';
import { FoodService } from '../shared/service/food.service';
import { Errors } from '../shared/models/errors.model';


const KEYS = {
  FORM: {
    FOOD_ITEM: 'foodItemKey'
  }
};


@Component({
  selector: 'fa-meal-validator',
  templateUrl: './meal-validator.component.html',
  styleUrls: ['./meal-validator.component.scss']
})
export class MealValidatorComponent implements OnInit, OnDestroy {
  @ViewChild('typeahead') typeAhead;
  exists: boolean;
  keys: any;
  errors: Errors;
  foodItemForm: FormGroup;
  selectedText: string;
  items: string[];
  longNamesNdbNoMap: {[longName: string]: string};
  errorMessage: string;

  foodItems: {[key: string]: string[]};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private foodService: FoodService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.exists = true;
    this.foodItems = {};
    this.foodItems.edible = [];
    this.foodItems.inedible = [];
    this.keys = KEYS;
    this.errors = new Errors();
    this.items = [];
    this.selectedText = '';
    this.errorMessage = '';

    const controlsConfig = {};
    controlsConfig[KEYS.FORM.FOOD_ITEM] = ['', Validators.required];

    this.foodItemForm = this.fb.group(controlsConfig);

    this.foodItemForm.valueChanges.pipe(
      debounceTime(350), takeWhile(_ => this.exists)
    ).subscribe(newVal => {
      const foodItem = newVal.foodItemKey === null ? '' : newVal.foodItemKey.trim();

      if (foodItem.length < 3) {
        return;
      }

      this.foodService.getSnippet(foodItem).pipe(
        takeWhile(_ => this.exists)
      ).subscribe((snippetsData: SnippetModel[]) => {
        const longNamesNdbNoMap: {[longName: string]: string} = {};
        const longNamesArr: string[] = [];

        let snippetData: SnippetModel;
        for (let idx = 0; idx < snippetsData.length; idx++) {
          snippetData = snippetsData[idx];
          longNamesNdbNoMap[snippetData.longDesc.toLowerCase()] = snippetData.ndbNo;
          longNamesArr.push(snippetData.longDesc);
        }
        this.longNamesNdbNoMap = longNamesNdbNoMap;
        this.items = [...longNamesArr];
      });
    });
  }

  submitFoodItem() {
    if (this.selectedText === '') {
      return;
    }

    const ndbNo = this.longNamesNdbNoMap[this.selectedText];

    const getPRALScore_B = (nd: NutdataModel): number => {
      // https://michaellustgarten.com/2016/10/19/pral-mortality-risk-and-lifespan/
      // PRAL = (0.49 * protein intake in g/day) + (0.037 * phosphorus intake in mg/day) –
      // (0.02 * potassium intake in mg/day) – (0.013 * calcium intake in mg/day) –
      // (0.027 * magnesium intake in mg/day)
      return 0.49 * nd.protein.val + 0.037 * nd.phosphorus.val - 0.02 * nd.potassium.val -
        0.027 * nd.magnesium.val - 0.013 * nd.calcium.val;
    };


    this.foodService.getNutritionDataForNdbNo(ndbNo).subscribe((nutritionData: NutdataModel) => {
      const pralScore_B = getPRALScore_B(nutritionData);

      if (pralScore_B < 0 && pralScore_B > -5.6) {
        this.foodItems.edible.push(this.selectedText);
      } else {
        this.foodItems.inedible.push(this.selectedText);
      }

      this.selectedText = '';
    }, (err: Error) => {
      this.errorMessage = err.message;
      this.selectedText = '';
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    });
  }

  getRemHeight() {
    let height = 10.0;

    switch (this.vDisplayType()) {
      case 4:
        height = 20.0;
        break;
      case 3:
        height = 16.0;
        break;
      case 2:
        height = 12.0;
        break;
      default:
        break;
    }

    return `${height}rem`;
  }

  vDisplayType() {
    if (window.innerHeight < 592) {
      return 1;
    } else if (window.innerHeight < 654) {
      return 2;
    } else if (window.innerHeight < 910) {
      return 3;
    }

    return 4;
  }

  searchFn(searchText: string) {
    this.foodItemForm.get(KEYS.FORM.FOOD_ITEM).setValue(searchText.toLowerCase());
  }

  changeFn(selectedText: string) {
    if (selectedText === undefined) {
      return;
    }

    this.selectedText = selectedText.toLowerCase();
  }

  searchFilterFn(): boolean {
    return true;
  }

  ngOnDestroy(): void {
    this.exists = false;
  }
}
