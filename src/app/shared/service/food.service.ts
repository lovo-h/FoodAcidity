import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { NutdataModel } from '../models/nutdata.model';
import { SnippetModel } from '../models/snippet.model';

import { ApiService } from './api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private api: ApiService) {
  }

  getSnippet(snippets): Observable<SnippetModel[]> {
    // replace anything that is not a #, or upper-, or lower-character w/ ''
    const re = /[^a-zA-Z0-9_]/g;

    const snips = snippets.split(' ').join('_').replace(re, '');
    return this.api.get(`/long_descs/${snips}`).pipe(map((res: HttpResponse<any>) => {
      const snippetDataArr: SnippetModel[] = [];

      for (let idx = 0; idx < res.body.data.length; idx++) {
        snippetDataArr.push(new SnippetModel(res.body.data[idx]));
      }

      return snippetDataArr;
    }));
  }

  getNutritionDataForNdbNo(ndbNo: string): Observable<any> {
    console.log(ndbNo);
    return this.api.get(`/foods/${ndbNo}`).pipe(map((res: HttpResponse<any>) => {
      if (res.body.data.length < 5) {
        throw new Error('Error: missing nutrition data');
      }
      return new NutdataModel(res.body.data);
    }));
  }
}
