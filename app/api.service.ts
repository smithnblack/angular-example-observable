import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Month } from "./month.model";
import { Year } from "./year.model";


@Injectable()
export class ApiService {

  private months: Month[] = [
    {month: "Januar"},
    {month: "Februar"}
  ];

  private years: Year[] = [
    {year: 2015},
    {year: 2016}
  ];

  // hier kannst du genau so dein API abrufen mit http.get('http....deineApiAdresse....')

  constructor(private http: HttpClient) { }

  public getMonths(): Observable<Month[]> {
    return of(this.months);
  }

  public getYears(): Observable<Year[]> {
    return of(this.years);
  }

  public addYear(yearToAdd:number): void {
    this.years.push({year: yearToAdd});
  }

  public adddMonth(monthToAdd:string): void {
    this.months.push({month: monthToAdd});
  }

}