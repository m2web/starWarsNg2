import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Planet } from '../classes/planet'

@Injectable()
export class PlanetService{
  private baseUrl: string = 'http://swapi.co/api';

  constructor(private http: Http){}
    
    getAll(): Observable<Planet[]>{
        let planets$ = this.http.get(`${this.baseUrl}/planets`, {headers: this.getHeaders()})
            .map(mapPlanets)
            .catch(handleError);
        return planets$;
    }

    get(id: number): Observable<Planet>{
        let planet$ = this.http.get(`${this.baseUrl}/planets/${id}`, {headers: this.getHeaders()})
            .map(mapPlanet)
            .catch(handleError);
        return planet$;
    }

     save(planet: Planet) : Observable<Response>{
        // this won't actually work because the StarWars API doesn't
        // is read-only. But it would look like this:
        return this.http
        .put(`${this.baseUrl}/planet/${planet.id}`, JSON.stringify(planet), {headers: this.getHeaders()});
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}

function mapPlanets(response:Response): Planet[]{
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
   return response.json().results.map(toPlanet)
}

function mapPlanet(response:Response): Planet{
  // toPerson looks just like in the previous example
  return toPlanet(response.json());
}

function toPlanet(r:any): Planet{
  let planet = <Planet>({
    id: extractId(r),
    url: r.url,
    name: r.name,
    climate: r.climate,
    population: r.population,
  });
  console.log('Parsed planet:', planet);
  return planet;
}

// to avoid breaking the rest of our app
// I extract the id from the planet url
function extractId(planetData:any){
  let extractedId = planetData.url.replace('http://swapi.co/api/planets/','').replace('/','');
  return parseInt(extractedId);
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || "Galatic Members: There was was a problem with our hyperdrive device and we couldn't retrieve your data!"
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
