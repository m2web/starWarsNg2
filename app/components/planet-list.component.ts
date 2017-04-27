import { Component, OnInit } from '@angular/core';
import { Planet } from '../classes/planet';
import { PlanetService } from '../services/planet.service';

@Component({
    selector: 'planet-list',
    templateUrl: 'app/html/planet-list.component.html'
})

export class PlanetListComponent implements OnInit{
    planets: Planet[] = [];
    errorMessage: string = "";
    isLoading: boolean = true;

    constructor(private planetService: PlanetService){}

    ngOnInit(){
        this.planetService
        .getAll()
        .subscribe(
            /* happy path */ p => this.planets = p,
            /* error path */ e => this.errorMessage = e,
            /* onComplete */ () => this.isLoading = false);
    }
}