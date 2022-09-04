import { Subscription } from 'rxjs';

import { Ingredient } from './../../shared/Models/ingredients.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/core/services/shopping-list/shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients: Ingredient[];
private igChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }


}


