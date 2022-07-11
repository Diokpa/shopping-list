import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "src/app/shared/Models/recipe.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from './../../../shared/Models/ingredients.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
 private recipes: Recipe[] = [
    new Recipe(
      'Afang Soup Recipe',
      'Cook Afang Soup with Okazi leaf',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/https%3A%2F%2Fs3.amazonaws.com%2Fpixtruder%2Foriginal_images%2Ff5cffedb779ce8ea3991f8020b5616d39ef6c0ee',
      [
        new Ingredient('Okazi leaf', 5),
        new Ingredient('Water leaf', 10)
      ]),
    new Recipe(
      'Spaghetti Jellof Recipe',
      'Prepare like Jellof rice',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/https%3A%2F%2Fs3.amazonaws.com%2Fpixtruder%2Foriginal_images%2Ff5cffedb779ce8ea3991f8020b5616d39ef6c0ee',
      [
        new Ingredient('Fresh Tomatoes', 8),
        new Ingredient('Scotch Bonnet', 7)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
