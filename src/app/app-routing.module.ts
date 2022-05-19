import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=>
    import('./movies/movies.module').then((m)=>m.MoviesModule)
  },
  {
    path: 'profile',
    loadChildren: ()=>
    import('./profile/profile.module').then((m)=>m.ProfileModule)
  },
  {
    path: 'login',
    loadChildren: ()=>
    import('./login/login.module').then((m)=>m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: ()=>
    import('./register/register.module').then((m)=>m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }