import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
@Component({
  selector : 'app-recipe-book',
  templateUrl : './RecipeBook.component.html',
  styleUrls: ['./RecipeBook.component.css'],
  providers: [RecipeService],
})

export class RecipeBookComponent implements OnInit{
  SelectedItem: Recipe;

  constructor(private recipeService: RecipeService) { } //Recipe service

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe) => {this.SelectedItem = recipe}
    )
  }
}
