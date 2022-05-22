import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http'

/**
 * RxJS
 */
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

/**
 * Servizi interni
 */
import { AuthService } from './../service/auth/auth.service'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {

        }
      }),
      catchError((error: HttpErrorResponse, caught) => {
        if (error.status === 401) {
          this.authService.logout()
          this.router.navigate(['/login'])
        }
        
        return throwError(() => error)
      })
    )
  }
}