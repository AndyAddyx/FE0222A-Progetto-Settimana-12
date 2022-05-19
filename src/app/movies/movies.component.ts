import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../auth/movies.service';
import { Movies } from '../model/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesArray: Movies[] = []

  constructor(private moviesSrv: MoviesService) { }

  ngOnInit(): void {
    this.moviesSrv.get().subscribe((dati)=>{
      this.moviesArray = dati
    }, (errore)=>{
      console.log(errore)
    })
  }

}
