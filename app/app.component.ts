import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/Rx';
import { ApiService } from './api.service';
import { Year } from './year.model';
import { Month } from './month.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

years$: Observable<Year[]>;
months$: Observable<Month[]>;
constructor(private dataService: ApiService)  {
  this.years$ = dataService.getYears();
  this.months$ = dataService.getMonths(); 
}

public addMonth(monthToAdd:string): void {
  this.dataService.adddMonth(monthToAdd);
}

public addYear(yearToAdd:number): void {
  this.dataService.addYear(yearToAdd);
}

}
