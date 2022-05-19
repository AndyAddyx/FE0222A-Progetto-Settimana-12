import { Injectable } from '@angular/core'
import {Router,CanActivate,ActivatedRouteSnapshot} from '@angular/router'


@Injectable()
export class RoleGuardService
  implements CanActivate
{
  constructor(
    public router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean
  {
    const expectedRole = route.data['expectedRole'] // admin

    /**
     *QIl valore di qesta costante
     * è il risultato di una serie di chiamate a vari
     * servizi ( login/acl )
     * Per ora, per collaudo, la impostiamo con un valore
     */
    // let mySessionToken = 'fkjgdfkjgwGDKgdlQGDGqgdlgQLDGlj'
    // const currentRole = this.myAwesomeUserService.getUserData(mySessionToken)
    // { name: 'Andy', role: 'member' }
    const currentRole = 'admin'

    if ( currentRole !== expectedRole ) {
      this.router.navigate(['error']);
      return false;
    }

    return true;
  }
}
