
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeBookComponent } from './RecipeBook/RecipeBook.component';
import { ShoppingListComponent } from './ShoppingList/ShoppingList.component';
import { RecipeDetailsComponent } from './RecipeBook/recipe-details/recipe-details.component';
import { RecipeListComponent } from './RecipeBook/recipe-list/recipe-list.component';

const appRoutes: Routes = [
  {path : '', redirectTo : '/Recipes', pathMatch : 'full'},
  {
    path: 'Recipes', component: RecipeBookComponent
  },
  { path: 'ShoppingList', component: ShoppingListComponent },
  { path: ':id', component: RecipeDetailsComponent }, 
  { path: 'RecipeListComponent', component: RecipeListComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]
})
export class AppRoutermodule { }
