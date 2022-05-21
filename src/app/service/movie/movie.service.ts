import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movies } from '../../model/movies';
import { catchError, throwError, Observable, switchMap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = 'http://localhost:4201'

  constructor(private http: HttpClient, private authSrv: AuthService) { }

  getMovies() {
    return this.http.get<Movies[]>(`${this.baseUrl}/movies-popular`)

    /*return this.http.get<Movies[]>(`${this.baseUrl}/movies-popular`)
      .pipe(
        catchError(errore => throwError(() => errore))
      )*/
  }

  getMovie(id:number): Observable<Movies> {
    return this.authSrv.user$.pipe(switchMap(user=>{
      return this.http.get<Movies>(`${this.baseUrl}/movies-popular/${id}`, {headers: new HttpHeaders({
        "Authorization": `Bearer ${user?.accessToken}`
      })})

    }))
    /*return this.http.get<Movies>(`${this.baseUrl}/movies-popular/${id}`)
    .pipe(catchError(errore => {
      return throwError(()=> errore)
    }))*/


  }



}
