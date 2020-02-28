import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../ShoppingList.service';

@Injectable() // to inject data from recipe service to shopping list service

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) { }

  recipes: Recipe[] = [
    new Recipe(
      'HydSplBiryani',
      'Tastes Good',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/veg-biryani-recipe.jpg',
      [
        new ingredient('vegitables', 5),
        new ingredient('Rice',5)
      ]),
    new Recipe(
      'AmericanSpicySalad',
      'TastesAwesome',
      'https://www.recipetineats.com/wp-content/uploads/2019/07/Salmon-Salad_1-747x747.jpg',
      [
        new ingredient('tomatoes', 4),
        new ingredient('cucumber', 3),
        new ingredient('bread',2)
      ]),
    new Recipe(
      'FruitSalad',
      'Tasty',
      'https://www.spendwithpennies.com/wp-content/uploads/2019/04/Fruit-Salad-SWP-500x500.jpg',
      [
        new ingredient('apples', 3),
        new ingredient('bananas',2)
      ])];

  getRecipes() {
    return this.recipes.slice();
  }

  

  addToShoppingList(ingredients : ingredient[]) {
    this.slService.addIngredientsToShoppingList(ingredients);
  }
}

