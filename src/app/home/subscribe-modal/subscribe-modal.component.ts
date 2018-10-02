import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendgridService } from '../../shared';
import { emailRegex } from '../../shared/common.consts';
import { KEYS } from './subscribe-consts';


interface MapOfMapArr {
  [key: string]: {[key: string]: string}[];
}

@Component({
  selector: 'fa-subscribe-modal',
  templateUrl: './subscribe-modal.component.html',
  styleUrls: ['./subscribe-modal.component.scss']
})
export class SubscribeModalComponent implements OnInit {
  keys: any;
  subscribeForm: FormGroup;
  subscribeFormErrMsgs: MapOfMapArr;
  validationMessage: string;

  constructor(
    private fb: FormBuilder,
    private sendgrid: SendgridService) {
  }

  ngOnInit() {
    this.keys = KEYS;
    const controlsConfig = {};
    controlsConfig[KEYS.FORM.EMAIL] = ['', [Validators.required, Validators.pattern(emailRegex)]];
    controlsConfig[KEYS.FORM.FIRST_NAME] = ['', Validators.required];
    controlsConfig[KEYS.FORM.LAST_NAME] = ['', Validators.required];

    this.subscribeForm = this.fb.group(controlsConfig);
    this.subscribeFormErrMsgs = {
      firstName: [
        {type: 'required', message: 'A first name is required', control: KEYS.FORM.FIRST_NAME},
      ],
      lastName: [
        {type: 'required', message: 'A last name is required', control: KEYS.FORM.LAST_NAME},
      ],
      email: [
        {type: 'required', message: 'An email is required in the input box', control: KEYS.FORM.EMAIL},
        {type: 'pattern', message: 'A valid email is required', control: KEYS.FORM.EMAIL},
      ]
    };
    this.validationMessage = '';
  }

  validEmail(): boolean {
    this.validationMessage = '';

    const formKeys = Object.keys(this.subscribeFormErrMsgs);
    for (let formKeysIdx = 0; formKeysIdx < formKeys.length; formKeysIdx++) {
      const formKey = formKeys[formKeysIdx];
      for (let idx = 0; idx < this.subscribeFormErrMsgs[formKey].length; idx++) {
        const type = this.subscribeFormErrMsgs[formKey][idx].type;
        const formControl = this.subscribeForm.get(this.subscribeFormErrMsgs[formKey][idx].control);
        if (formControl.hasError(type)) {
          this.validationMessage = this.subscribeFormErrMsgs[formKey][idx].message;
          return false;
        }
      }
    }

    return true;
  }

  subscribeBtn() {
    if (!this.validEmail()) {
      return;
    }

    const form = this.subscribeForm.getRawValue();

    this.sendgrid.subscribeWithUserInfo(form).subscribe((res) => {
      document.getElementById('subscribeModal').click();
      this.subscribeForm.reset({});
    });
  }
}
