import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api';

  private static formatErrors(error: any) {
    return throwError(error);
  }

  private static setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return new HttpHeaders(headersConfig);
  }

  constructor(private http: HttpClient) {
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`, {headers: ApiService.setHeaders(), params: params, observe: 'response'})
      .pipe(catchError(ApiService.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${this.apiUrl}${path}`, body, {headers: ApiService.setHeaders(), observe: 'response'})
      .pipe(catchError(ApiService.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${this.apiUrl}${path}`, body, {headers: ApiService.setHeaders(), observe: 'response'})
      .pipe(catchError(ApiService.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(`${this.apiUrl}${path}`, {headers: ApiService.setHeaders(), observe: 'response'})
      .pipe(catchError(ApiService.formatErrors));
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return this.http.patch(`${this.apiUrl}${path}`, body, {headers: ApiService.setHeaders(), observe: 'response'})
      .pipe(catchError(ApiService.formatErrors));
  }
}
