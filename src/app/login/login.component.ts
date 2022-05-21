import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false
  errorMessage = undefined

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authSrv.user$.subscribe(val=>{
      console.log('user state', val)
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
