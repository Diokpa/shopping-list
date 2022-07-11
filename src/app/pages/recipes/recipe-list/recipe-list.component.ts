import { Component, OnInit} from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe/recipe.service';
import { Recipe } from './../../../shared/Models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]

  constructor(private recipeService: RecipeService) { }

  ngOnInit (): void {
    this.recipes = this.recipeService.getRecipes();
  }



}