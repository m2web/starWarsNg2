import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent }  from './components/app.component';
import { PeopleListComponent } from './components/people-list.component';
import { PersonDetailsComponent } from './components/person-details.component';
import { PlanetListComponent } from './components/planet-list.component';
import { PlanetDetailsComponent } from './components/planet-details.component'

@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule],
  declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent, PlanetListComponent, PlanetDetailsComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
