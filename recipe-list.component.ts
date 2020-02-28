import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// EventEmitter, Output remove (using services)
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() SelectedRecipe = new EventEmitter<Recipe>();  //Using RecipeServices
  recipes: Recipe[] = []; //un initializied property array.

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe : Recipe) {
   this.SelectedRecipe.emit(recipe);
 }
}
