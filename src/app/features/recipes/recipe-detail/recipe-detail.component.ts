import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from 'src/app/shared/Models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeFromRecipeItem: Recipe

  constructor() { }

  ngOnInit(): void {
  }

}
