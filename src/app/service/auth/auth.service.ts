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


import { JwtHelperService } from '@auth0/angular-jwt';

export interface AuthData {
  accessToken: string;
  user: {
    email: string;
    id: number;
    name: string;
  };
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
export class AuthService {
  jwtHelper = new JwtHelperService()
  url = 'http://localhost:4201';
  private authSubj = new BehaviorSubject<null | AuthData>(null);

  user$ = this.authSubj.asObservable();
  timeoutLogout:any

  constructor(private http: HttpClient, private router: Router) { }

  // RICORDA è solo una traccia, non è completato, TODO!!!!!!
  login(payload: LoginRequest): Observable<LoginToken> {
    // const url = sprintf('%s%s', this.env.apiGateway, '/v1/auth/login')
    const url = this.url
    return this.http.post<LoginToken>(url, payload, {
      // headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      // observe: 'response'
    }).pipe(
      map((response: any) => {
        const loginToken: LoginToken = {
          access_token: response.body.access_token,
          // expires_in: response.body.expires_in,
          // token_type: response.body.token_type,
          // scope: response.body.scope,
          refresh_token: response.body.refresh_token,
          // user_id: response.body.user_id

          /**
           * Sto porco bastardo ha smesso di funzionare
           */
          //user_id: response.headers.get('X-Api-User-Id')
        }

        // if(!loginToken.user_id) {
        //   console.warn('Hey hey hey, userId is not exposed, check web server configuration')
        // }

        return loginToken
      })
    )
  }

  public logout() {}

  public refresh() {}

  public isLoggedIn() {
    /**
     * Al momento non è gestito, quindi 
     * schiantiamo il valore true o false 
     * e vediamo il comportamento della guard
     * 
     * false vuol dire che non sei loggato, altrimenti metti true
     */

    return true
  }
}
