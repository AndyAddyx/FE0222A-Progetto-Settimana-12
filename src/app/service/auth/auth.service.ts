import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

export interface AuthData {
  accessToken: string;
  user: {
    email: string;
    id: number;
    name: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService()
  url = 'http://localhost:4201';
  private authSubj = new BehaviorSubject<null | AuthData>(null);

  user$ = this.authSubj.asObservable();
  timeoutLogout:any

  constructor(private http: HttpClient, private router: Router) { }
}
