import { Component, Input } from '@angular/core';


@Component({
  selector: 'fa-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {
  @Input() itemsList: string[];


  getItems() {
    this.itemsList = this.itemsList.sort();

    if (this.hDisplayType() === 1) {
      return [this.itemsList];
    } else if (this.hDisplayType() === 2) {
      const separatedItemsB = [[], []];
      let foodItemB = null;

      for (let idx = 0; idx < this.itemsList.length; idx++) {
        foodItemB = this.itemsList[idx];
        switch (idx % 2) {
          case 0:
            separatedItemsB[0].push(foodItemB);
            break;
          case 1:
            separatedItemsB[1].push(foodItemB);
            break;
          default:
            break;
        }
      }

      return separatedItemsB;
    }

    const separatedItems = [[], [], []];
    let foodItem = null;

    for (let idx = 0; idx < this.itemsList.length; idx++) {
      foodItem = this.itemsList[idx];
      switch (idx % 3) {
        case 0:
          separatedItems[0].push(foodItem);
          break;
        case 1:
          separatedItems[1].push(foodItem);
          break;
        case 2:
          separatedItems[2].push(foodItem);
          break;
        default:
          break;
      }
    }

    return separatedItems;

  }

  hDisplayType() {
    if (window.innerWidth < 768) {
      return 1;
    } else if (window.innerWidth < 992) {
      return 2;
    }
    return 3;
  }
}
