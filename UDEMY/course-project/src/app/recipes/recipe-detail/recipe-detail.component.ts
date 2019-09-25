import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  breakdown: Recipe;
  id: number;
  constructor(private rService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.params);
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.breakdown = this.rService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.rService.addIngredientsToShoppingList(this.breakdown.ingredients);
  }
}
