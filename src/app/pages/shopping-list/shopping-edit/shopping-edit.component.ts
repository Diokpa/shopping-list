import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/core/services/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/Models/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;



  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit (): void {
  }

  onAddItem () {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  // same as above
  // onAddItem(){
  //   this.ingredientAdded.emit({
  //     name: this.nameInputRef.nativeElement.value,
  //     amount: this.amountInputRef.nativeElement.value
  //   });
  // }
}
