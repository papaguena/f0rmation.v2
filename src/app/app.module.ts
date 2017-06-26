import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormationComponent } from './formation/formation.component';
import { routing }  from './app.routing';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [AppComponent, HomeComponent, FormationComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
