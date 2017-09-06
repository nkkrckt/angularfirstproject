import { Component, OnInit } from '@angular/core';
import { MealsService } from '../meals.service';

@Component({
  selector: 'app-cook-page',
  templateUrl: './cook-page.component.html',
  styleUrls: ['./cook-page.component.css'],
  providers: [MealsService]
})
export  class CookPageComponent implements OnInit {
  isInEdition = false;
  mealList: string[] = [];
  mealPrice: number[] = [];
  mealIterator: number;
  constructor(private mealsService: MealsService) {
    let i: number;
    this.mealList = ['Pizza Margarita', 'Lasagna', 'Pasta Carbonara'];
    for ( i = 0; i < this.mealList.length; i++ ) {
      this.mealPrice[i] = Math.round( Math.random() * 10 + 1);
    }
  }


  editMeal() {
    if (!this.isInEdition) {
      this.isInEdition = true;
    } else {
      this.isInEdition = false;
    }
  }

  ngOnInit() {
  }
}
