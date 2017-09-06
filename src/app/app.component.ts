import { Component } from '@angular/core';
import {MealsService} from './meals.service';
import {Meal} from './meals';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MealsService]
})
export class AppComponent implements OnInit {
  private meals: Meal[];
  title = 'app';
  constructor(private mealsService: MealsService) {  }

  ngOnInit(): any {
    this.mealsService.getMeals().then(meals => this.meals = meals);
  }
}

// this.meals = this.mealsService.getMeals();

