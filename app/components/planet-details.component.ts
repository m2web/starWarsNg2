import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { Planet } from '../classes/planet'
import { PlanetService } from '../services/planet.service'

@Component({
   selector: 'planet-details',
   templateUrl: 'app/html/planet-details.component.html'
})

export class PlanetDetailsComponent implements OnInit, OnDestroy{
    planet: Planet;
    sub: any;

    constructor(private planetService: PlanetService, 
        private route: ActivatedRoute,
        private router: Router){}

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => { 
            let id = Number.parseInt(params['id']);
            console.log('Getting the planet with the id: ', id);
            this.planetService
                .get(id)
                .subscribe(p => this.planet = p);
        })
    }

     ngOnDestroy(){
        this.sub.unsubscribe();
     }

     gotoPlanetsList(){
         let link = ['/planets'];
         this.router.navigate(link);
     }

     savePlanetDetails(){
         this.planetService
            .save(this.planet)
            .subscribe(
                (r: Response) => {console.log('Success');}
            )
     }

}