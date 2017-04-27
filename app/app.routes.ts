import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from './components/people-list.component';
import { PersonDetailsComponent } from './components/person-details.component';
import { PlanetListComponent } from './components/planet-list.component';
import { PlanetDetailsComponent } from './components/planet-details.component'

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PeopleListComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'persons/:id',
    component: PersonDetailsComponent
  },
  // map '/persons' to the people list component
  {
    path: 'planets',
    component: PlanetListComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'planets/:id',
    component: PlanetDetailsComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
