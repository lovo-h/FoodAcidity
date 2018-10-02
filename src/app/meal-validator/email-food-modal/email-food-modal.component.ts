import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendgridService } from '../../shared';
import { emailRegex } from '../../shared/common.consts';
import { KEYS } from './email-food-consts';

@Component({
  selector: 'fa-email-food-modal',
  templateUrl: './email-food-modal.component.html',
  styleUrls: ['./email-food-modal.component.scss']
})
export class EmailFoodModalComponent implements OnInit {
  @Input() edibleFoodList: string[];

  keys: any;
  emailFoodForm: FormGroup;
  emailErrMessages: {[key: string]: string}[];
  sendErrorMessage: string;

  constructor(
    private fb: FormBuilder,
    private sendgrid: SendgridService) {
  }

  ngOnInit() {
    this.keys = KEYS;
    const controlsConfig = {};
    controlsConfig[KEYS.FORM.EMAIL] = ['', [Validators.required, Validators.pattern(emailRegex)]];

    this.emailFoodForm = this.fb.group(controlsConfig);
    this.sendErrorMessage = '';

    this.emailErrMessages = [
      {type: 'required', message: 'An email is required in the input box', control: KEYS.FORM.EMAIL},
      {type: 'pattern', message: 'A valid email is required', control: KEYS.FORM.EMAIL},
    ];
  }

  validEmail(): boolean {
    for (let idx = 0; idx < this.emailErrMessages.length; idx++) {
      const type = this.emailErrMessages[idx].type;
      const formControl = this.emailFoodForm.get(KEYS.FORM.EMAIL);
      if (formControl.hasError(type)) {
        this.sendErrorMessage = this.emailErrMessages[idx].message;
        return false;
      }
    }

    return true;
  }

  sendEmail() {
    if (!this.validEmail()) {
      return;
    }

    const email = this.emailFoodForm.get(KEYS.FORM.EMAIL).value;

    this.sendgrid.emailEdibleFoodList(email, this.edibleFoodList).subscribe(_ => {
      document.getElementById('emailFoodModal').click();
      this.emailFoodForm.reset({});
    });
  }

}
