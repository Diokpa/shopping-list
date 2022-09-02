import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/core/services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isEditMode = false;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.isEditMode = params['id'] != null
        }
      );
  }

}