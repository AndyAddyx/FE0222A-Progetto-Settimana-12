import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie/movie.service';
import { Movies } from '../../model/movies';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  host: {
    'class': 'container p-0 m-0'
  },
})
export class MoviesComponent implements OnInit {

  moviesArray: Movies[] = []

  constructor(private moviesSrv: MovieService, private authSrv: AuthService) { }

  ngOnInit(): void {
    this.moviesSrv.getMovies().subscribe((dati)=>{
      this.moviesArray = dati
    })
  }

  logout(){
    this.authSrv.logout()
  }

}
