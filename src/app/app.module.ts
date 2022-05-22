import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { AuthModule } from './module/auth/auth.module';
import { SidebarModule } from './sidebar/sidebar.module'

/**
 * Componenti interni
 */
import { MoviesComponent } from './module/movies/movies.component'
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoutComponent } from './module/login/component/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SidebarComponent, 
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    SidebarModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
