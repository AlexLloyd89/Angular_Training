import { Component, OnInit, OnDestroy } from "@angular/core";

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  shoppingList: FormGroup;
  subscription: Subscription;
  editMode: boolean = false;
  editItemIndex: number;
  editedItem: Ingredient;

  constructor(
    private slService: ShoppingListService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.shoppingList = this.fb.group({
      name: ["", Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]]
    });

    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.shoppingList.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onSubmit(data) {
    const value = data.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    data.reset();
  }

  onClear() {
    this.shoppingList.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
