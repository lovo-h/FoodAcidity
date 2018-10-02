import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { KEYS as subscribeKeys } from '../../home/subscribe-modal/subscribe-consts';

@Injectable({
  providedIn: 'root'
})
export class SendgridService {

  constructor(private api: ApiService) {
  }

  subscribeWithUserInfo(userInfo: {[key: string]: string}): Observable<any> {
    return this.api.post('/emails/recipients', {
      first_name: userInfo[subscribeKeys.FORM.FIRST_NAME],
      last_name: userInfo[subscribeKeys.FORM.LAST_NAME],
      email: userInfo[subscribeKeys.FORM.EMAIL],
    });
  }

  emailEdibleFoodList(email: string, edibleFoodList: string[]): Observable<any> {
    return this.api.post('/emails/edible_list', {
      edible_foods: edibleFoodList,
      email: [email]
    });
  }
}
