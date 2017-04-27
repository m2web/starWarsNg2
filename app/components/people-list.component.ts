import { Component, OnInit } from '@angular/core';
import { Person } from '../classes/person';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'people-list',
  templateUrl: 'app/html/people-list.component.html'
})
export class PeopleListComponent implements OnInit{
  people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService : PeopleService){ }

  ngOnInit(){
    this.peopleService
      .getAll()
      .subscribe(
         /* happy path */ p => this.people = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }
}
