import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// event emitter & output are removed
import { ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../ShoppingList.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<ingredient>(); // shpooinglist service

  constructor(private slService : ShoppingListService) { }
  ngOnInit(){}
  onAddIngredient() {
    const nameIng = this.nameInputRef.nativeElement.value;
    const amountIng = this.amountInputRef.nativeElement.value;
    const newIngAdded = new ingredient(nameIng, amountIng);
    this.slService.addIngredient(newIngAdded);
   // this.ingredientAdded.emit(newIngAdded); // shopping list service
    
  }
}
