import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoading = false
  errorMessage = undefined

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onsubmit(form:NgForm){
    this.isLoading = true
    console.log(form)

    try {
      await this.authSrv.signup(form.value).toPromise()
      form.reset()
      this.isLoading = false
      this.errorMessage = undefined
      this.router.navigate(['/login'])


    } catch (error: any) {
      this.isLoading = false
      this.errorMessage = error.error
      console.error(error)

    }


  }

}
