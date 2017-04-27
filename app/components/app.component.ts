import { Component } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { PlanetService } from '../services/planet.service';

@Component({
  selector: 'my-app',
  template: `
  <h2> {{title}} </h2>
  <nav>
    <a routerLink="/persons" routerLinkActive="active">Persons</a>
    <a routerLink="/planets" routerLinkActive="active">Planets</a>
  </nav>
  <router-outlet>
  `,
  providers: [PeopleService, PlanetService]
})
export class AppComponent {
  title:string = 'Star Wars Things!';
}
