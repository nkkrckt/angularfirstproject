import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Meal} from './meals';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class MealsService {
  private mealUrl = 'api/meals';
  constructor(private http: Http) {
    console.log('service works');
  }


  getMeals(): Promise<Meal[]> {
    return this.http.get(this.mealUrl)
      .toPromise()
      .then(response => response.json().data as Meal[])
      .catch(this.handleError);
  }


  getMeal(id: number): Promise<Meal[]> {
    const url = `${this.mealUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Meal[])
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
