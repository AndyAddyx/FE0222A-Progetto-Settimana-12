import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie/movie.service';
import { Movies } from '../model/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesArray: Movies[] = []

  constructor(private moviesSrv: MovieService) { }

  ngOnInit(): void {
    this.moviesSrv.getMovies().subscribe((dati)=>{
      this.moviesArray = dati
    })
  }

}
