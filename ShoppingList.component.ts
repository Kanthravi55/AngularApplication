import { Component } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../ShoppingList.service';

@Component({
  selector : 'app-shopping-list',
  templateUrl : './ShoppingList.component.html',
})

export class ShoppingListComponent {


  ingredients: ingredient[] = []

  constructor(private slService : ShoppingListService) {}
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.IngredientChanged.subscribe(
      (ingredients : ingredient[]) => {this.ingredients = ingredients });
  }

  ingAdded(ingredient : ingredient) {
    this.ingredients.push(ingredient);
  }
}
