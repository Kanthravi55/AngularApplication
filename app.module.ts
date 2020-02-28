import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './Header/Header.component';
import { RecipeBookComponent } from './RecipeBook/RecipeBook.component';
import { ShoppingListComponent } from './ShoppingList/ShoppingList.component';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { RecipeListComponent } from './RecipeBook/recipe-list/recipe-list.component';
import { RecipeItemsComponent } from './RecipeBook/recipe-list/recipe-items/recipe-items.component';
import { RecipeDetailsComponent } from './RecipeBook/recipe-details/recipe-details.component';
import { ShoppingEditComponent } from './ShoppingList/shopping-edit/shopping-edit.component';
import { dropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './ShoppingList.service';
import { AppRoutermodule } from './router.module';




@NgModule({
  
  declarations: [
    AppComponent, RecipeBookComponent, ShoppingListComponent, HeaderComponent, RecipeListComponent, RecipeItemsComponent, RecipeDetailsComponent, ShoppingEditComponent, dropdownDirective,
  ],
  imports: [
    BrowserModule, FormsModule,AppRoutermodule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})

export class AppModule {
  
}
