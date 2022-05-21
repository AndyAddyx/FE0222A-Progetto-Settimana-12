/**
 * Angular
 */
import { Injectable } from '@angular/core'
import { Router,CanActivate,ActivatedRouteSnapshot } from '@angular/router'

/**
 * Services
 */
import { AuthService } from '../service/auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService
  implements CanActivate
{
  constructor(
    public router: Router,
    private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean
  {
    /*const isLoggedIn: boolean = this.authService.isLoggedIn()

    if ( !isLoggedIn ) {
      console.log('AuthGuard: NON sei loggato, redirezione in corso')
      this.router.navigate(['login'])
      return false
    }

    console.log('AuthGuard: sei loggato,puoi passare')*/
    return true
  }
}
