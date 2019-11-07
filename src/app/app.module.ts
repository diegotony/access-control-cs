import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeUsersComponent } from './users/home-users/home-users.component';
import { HomePermisosComponent } from './permisos/home-permisos/home-permisos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeUsersComponent,
    HomePermisosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
