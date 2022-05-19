import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule  } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';

const routes: Routes = [{path:'', component: SidebarComponent}];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule.forChild(routes)
  ]
})
export class SidebarModule {

}


