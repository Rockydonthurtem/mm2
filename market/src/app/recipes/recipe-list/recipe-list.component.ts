import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

@Output()recipeWasSelected = new EventEmitter<Recipe>();

recipes: Recipe[] = [
  new Recipe ("Test receipt", "just a test", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDiufKFfnrfA&psig=AOvVaw0vQb0YWYtd09BIETb_6uqs&ust=1589145642979000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiu_IDbp-kCFQAAAAAdAAAAABAD")
];

  constructor() { console.log("HERE", this.recipes)}

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
