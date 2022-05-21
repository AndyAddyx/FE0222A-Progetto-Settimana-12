import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http'

/**
 * RxJS
 */
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            
          // console.log('HttpResponse')
          // console.log(event)
        }
      }),
      catchError((error: HttpErrorResponse, caught) => {
        if (error.status === 401) {
          

          // 1) effettuare injection di authService
          // 2) se entriamo qui, vuol dire che il token non è valido: chiamare logout di authService
          // 3) redirezionare al login

          // console.log('Errore')
          // console.log(error)
        }
        
        return throwError(() => error)
      })
    )
  }
}