import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/Models/ingredients.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Lemon", 2),
    new Ingredient("Cucumber", 3)
  ]

  getIngredients () {
    return this.ingredients.slice();
  }


  addIngredient (ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice())
  }

  addIngredients (ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    // the above method is wrong
    // looping through all ingredients
    // and adding them individually is not efficient
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }


}
