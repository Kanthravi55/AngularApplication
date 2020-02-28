import { ingredient } from './shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  IngredientChanged = new EventEmitter<ingredient[]>();
  private ingredients: ingredient[] = [
    new ingredient('apple', 5),
    new ingredient('Tomatoes', 10),
  ]

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient : ingredient) {
    this.ingredients.push(ingredient);
    this.IngredientChanged.emit(this.ingredients.slice());
  }

  addIngredientsToShoppingList(ingredients: ingredient[]) {
    //for (let ingredient of this.ingredients) {        
    //  this.addIngredient(ingredient);
   //instead we can use all the data in simple "spread()" => ES6 -> (...)
    this.ingredients.push(...ingredients); // (...)spread operator, this allows an array of elements to list of elements
    this.IngredientChanged.emit(this.ingredients.slice());
    }
  }

