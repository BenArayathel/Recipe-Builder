import { Component } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeListService } from '../services/recipe-list.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipeList: Array<Recipe>;

  constructor(private recipeService: RecipeListService){
    this.recipeList = this.recipeService.getRecipes();
  }


  createRecipe(){

    let title: string | null = (<HTMLInputElement>document.getElementById('title')).value;
    let ingredients = (<HTMLInputElement>document.getElementById('ingredients')).value.split('\n');
    let instructions =(<HTMLInputElement> document.getElementById('instructions')).value.split('\n');

    console.log(title);

    let recipe = new Recipe(title,ingredients,instructions);

    this.recipeService.addToRecipes(recipe);

  }

  deleteRecipe(index: number){
    this.recipeService.deleteRecipes(index);
  }

  editRecipe(index: number) {
    const editedRecipe = prompt('Edit recipe:', JSON.stringify(this.recipeList[index]));
    if (editedRecipe) {
      this.recipeList[index] = JSON.parse(editedRecipe);
      // this.saveRecipes();
    }
  }
}
