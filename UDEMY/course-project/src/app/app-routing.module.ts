import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";

const routes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  //Recipes Routes
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      {
        path: "",
        component: RecipeStartComponent
      },
      {
        path: ":id",
        component: RecipeDetailComponent
      }
    ]
  },
  //Shopping Routes
  {
    path: "shopping-list",
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
