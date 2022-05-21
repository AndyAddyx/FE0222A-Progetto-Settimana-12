import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MoviesComponent } from './movies.component';
import { AuthGuard } from '../../guard/auth.guard';

const routes: Routes = [
  {
    path:'',
    component: MoviesComponent,
    canActivate: [AuthGuard]


  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class MoviesModule { }
