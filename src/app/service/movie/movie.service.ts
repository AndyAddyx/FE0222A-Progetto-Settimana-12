import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../../model/movies';
import { catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = 'http://localhost:4201'

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(`${this.baseUrl}/movies-popular`)
      .pipe(
        catchError(errore => throwError(() => errore))
      )
  }

  getMovie(id:number): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseUrl}/movies-popular/${id}`)
    .pipe(catchError(errore => {
      return throwError(()=> errore)
    }))


  }



}
