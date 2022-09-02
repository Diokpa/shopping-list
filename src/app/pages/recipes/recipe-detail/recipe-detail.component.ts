import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/core/services/recipe/recipe.service';
import { Recipe } from 'src/app/shared/Models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;


  constructor(private recipeService: RecipeService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit (): void {
    //from URL
    //const id = this.route.snapshot.params['id'];

    //from observable reacting to change
    this.currentRoute.params
      .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.id);
          }
      );

  }

  onAddToShoppingList () {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.currentRoute});

    //same as above
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.currentRoute});
  }

}
