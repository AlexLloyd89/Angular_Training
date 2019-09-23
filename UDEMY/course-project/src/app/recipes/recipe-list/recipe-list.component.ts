import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "a test",
      "short test desc",
      "https://cmsassets.mybluprint.com/dims4/default/acd740c/2147483647/strip/true/crop/5760x3440+0+312/resize/1440x860!/quality/90/?url=https%3A%2F%2Fcmsassets.mybluprint.com%2Fec%2F33%2Fca67d3614f9ba64cc1bbd31db103%2Fbakingbirthdaycake-hero-istock-671092002-super-copy.jpg"
    ),
    new Recipe(
      "a TEST 2",
      "short test desc",
      "https://cmsassets.mybluprint.com/dims4/default/acd740c/2147483647/strip/true/crop/5760x3440+0+312/resize/1440x860!/quality/90/?url=https%3A%2F%2Fcmsassets.mybluprint.com%2Fec%2F33%2Fca67d3614f9ba64cc1bbd31db103%2Fbakingbirthdaycake-hero-istock-671092002-super-copy.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
