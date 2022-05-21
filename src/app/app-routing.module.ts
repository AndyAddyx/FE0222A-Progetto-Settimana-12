import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Guard
 */
import { AuthGuard } from './guard/auth.guard'

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=>
    import('./module/movies/movies.module').then((m)=>m.MoviesModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'profile',
    loadChildren: ()=>
    import('./module/profile/profile.module').then((m)=>m.ProfileModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'login',
    loadChildren: ()=>
    import('./module/login/login.module').then((m)=>m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: ()=>
    import('./module/register/register.module').then((m)=>m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }