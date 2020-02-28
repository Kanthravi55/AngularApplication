import { Component, OnInit, Input } from '@angular/core';
// Output & EventEmitter removed from @angular/Core
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {
  @Input() recipe: Recipe;
 // @Output() SelectedItem = new EventEmitter<void>();  //using Services (recipe.service) 

  ngOnInit() {
  }
  constructor(private recipeService : RecipeService) {}
  onSelectItem() {
    this.recipeService.recipeSelected.emit(this.recipe);
   // this.SelectedItem.emit(); //Services
  }
}
