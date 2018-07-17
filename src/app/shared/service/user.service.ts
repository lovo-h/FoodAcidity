import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { ApiService } from './api.service';

import { BehaviorSubject, Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject;
  public currentUser;

  private isAuthenticatedSubject;
  public isAuthenticated;


  constructor(private apiService: ApiService) {
    this.currentUserSubject = new BehaviorSubject<User>(new User());
    this.currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    this.isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
  }

  populate() {
    this.apiService.get('/api/users/verify')
      .subscribe(data => {
          this.setAuth(data.user);
        }, err => {
          this.purgeAuth();
        }
      );
  }

  setAuth(user: User) {
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Set current user to an empty object
    this.currentUserSubject.next(new User());
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  register(body: Object = {}): Observable<any> {
    return this.apiService.post('/users/register', body);
  }

  login(body: Object = {}): Observable<any> {
    return this.apiService.post('/users/login', body);
  }

  signOff(): Observable<any> {
    return this.apiService.get('/api/users/logout')
      .pipe(map((res: HttpResponse<any>) => {
          if (res.body.logout === 'Successful') {
            this.purgeAuth();
          }
          return res.body;
        })
      );
  }

  attemptAuth(type, data): Observable<User> {
    switch (type) {
      case 'login':
        return this.login({data})
          .pipe(map((res: HttpResponse<any>) => {
            this.setAuth(res.body.user);
            return res.body;
          }));
      default:
        return this.register({data: {email: data.email, password: data.password}})
          .pipe(map((res: HttpResponse<any>) => {
            this.setAuth(res.body.user);
            return res.body;
          }));
    }
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }
}
