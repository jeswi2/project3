import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatalinkComponent } from './datalink/datalink.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes:Routes=[
  {
    path:"",component:DatalinkComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatalinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
