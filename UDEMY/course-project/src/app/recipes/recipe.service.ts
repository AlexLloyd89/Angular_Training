import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "a test",
      "short test desc",
      "https://cmsassets.mybluprint.com/dims4/default/acd740c/2147483647/strip/true/crop/5760x3440+0+312/resize/1440x860!/quality/90/?url=https%3A%2F%2Fcmsassets.mybluprint.com%2Fec%2F33%2Fca67d3614f9ba64cc1bbd31db103%2Fbakingbirthdaycake-hero-istock-671092002-super-copy.jpg",
      [new Ingredient("cake batter", 1), new Ingredient("frosting", 5)]
    ),
    new Recipe(
      "a TEST 2",
      "Test, the second",
      "https://cmsassets.mybluprint.com/dims4/default/acd740c/2147483647/strip/true/crop/5760x3440+0+312/resize/1440x860!/quality/90/?url=https%3A%2F%2Fcmsassets.mybluprint.com%2Fec%2F33%2Fca67d3614f9ba64cc1bbd31db103%2Fbakingbirthdaycake-hero-istock-671092002-super-copy.jpg",
      [
        new Ingredient("Chocolate cake batter", 1),
        new Ingredient("cookies", 500)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipess() {
    return [...this.recipes];
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
