import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

/**
 * Rxjs
 */
import { Observable } from 'rxjs'
import { filter, tap } from 'rxjs/operators'


import { AuthData } from './interface/authdata.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false
  errorMessage = undefined
  private userObservable$: Observable<AuthData|null>

  constructor(private authSrv: AuthService, private router: Router) { 
    this.userObservable$ = this.authSrv.user$.pipe(
      // tap(authData => console.log(authData)),
      filter(authData => null !== authData)
    )
  }

  ngOnInit(): void {
    this.subscribeTouserSessionData()
    this.authSrv.applyCurrentSession()
  }

  subscribeTouserSessionData() {
    this.userObservable$.subscribe(authData => {
      this.router.navigate(['/'])
    })
  }

  async onsubmit(form:any){
    console.log(form)

    try {
      await this.authSrv.login(form.value).toPromise()
      form.reset()
      this.errorMessage = undefined
      this.router.navigate(['/'])

    } catch (error: any) {
      console.error(error)
      this.errorMessage = error.error

    }
  }

}
