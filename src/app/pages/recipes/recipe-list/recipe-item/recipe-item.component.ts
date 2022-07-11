import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe/recipe.service';

import { Recipe } from 'src/app/shared/Models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe
  constructor(private recipeService: RecipeService) { }

  ngOnInit (): void {
  }

  onRecipeSelect(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
