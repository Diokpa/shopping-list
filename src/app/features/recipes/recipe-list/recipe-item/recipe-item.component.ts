import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from 'src/app/shared/Models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<void>();
  @Input() recipe: Recipe
  constructor() { }

  ngOnInit (): void {
  }

  onRecipeSelect(){
    this.recipeSelected.emit();
  }

}
