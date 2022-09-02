import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipeStartComponent } from "./pages/recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./pages/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./pages/recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent}
  ] },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
