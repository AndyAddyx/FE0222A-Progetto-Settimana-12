/**
 * Angular
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

/**
 * RxJS
 */
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'

import { AuthData } from './../../module/login/interface/authdata.interface'


import { JwtHelperService } from '@auth0/angular-jwt';

export interface SignupData {
  name: string,
  surname: string,
  email: string,
  password: string
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginToken {
  access_token: string;
  refresh_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  URL = 'http://localhost:4201'
  private authSubject = new BehaviorSubject<null | AuthData>(null)
  user$ = this.authSubject.asObservable()
  isLoggedIn$ = this.user$.pipe(map(user=>!!user))

  constructor(private http:HttpClient, private router: Router ) { }

  login(data:{email:string, password:string}){
    return this.http.post<AuthData>(`${this.URL}/login`, data).pipe(tap(val =>{
      console.log(val)
    }),tap(data=>{
      this.authSubject.next(data)
      localStorage.setItem('user', JSON.stringify(data))
    }))
  }

  getCurrentSession(): AuthData {
    const jsonData: any = localStorage.getItem('user')
    return JSON.parse(jsonData)
  }

  applyCurrentSession() {
    let data: AuthData = this.getCurrentSession()
    this.authSubject.next(data)
  }

  signup(data:SignupData){
     return this.http.post(`${this.URL}/register`, data)
  }

  public logout() {
    this.authSubject.next(null)
    this.router.navigate(['/login'])
  }

  public refresh() {}

  /*public isLoggedIn() {
    /** Ricordati, devo ancora fare la logica di logged in
     * Al momento non è gestito, quindi
     * metto al volo il valore true o false
     * e vedo il comportamento della guard
     *
     * false vuol dire che non sono loggato, altrimenti è true


    return true
  }*/
}
