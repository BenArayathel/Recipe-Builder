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
  
  isEditingTitle: boolean[] = [];
  isEditingIngredients: boolean[] = [];
  isEditingInstructions: boolean[][] = [];

  searchTerm: string = '';
  filteredRecipeList: Array<Recipe>;

  constructor(private recipeService: RecipeListService){
    this.recipeList = this.recipeService.getRecipes();
    this.filteredRecipeList = this.recipeList;
  }


get SearchTerm(): string{
  return this.searchTerm;
}

set SearchTerm(userInput: string){
  this.searchTerm = userInput;
  this.filteredRecipeList = this.searchFilter(userInput);
  console.log(this.filteredRecipeList);
}

searchFilter(filterValue: string): Recipe[]{

  return this.recipeList.filter(
    (recipe: Recipe) => {return recipe.title.toLowerCase().includes(this.searchTerm.toLowerCase()); }
  )
}
  

editTitle(index: number) {
  this.isEditingTitle[index] = !this.isEditingTitle[index];
  this.recipeService.saveRecipes();
  console.log(this.SearchTerm)
  console.log(this.filteredRecipeList)
}

editIngredients(index: number) {
  this.isEditingIngredients[index] = !this.isEditingIngredients[index];
  this.recipeService.saveRecipes();
}

editInstructions(index: number) {
  if (!this.isEditingInstructions[index]) {
    this.isEditingInstructions[index] = [];
    const numLines = this.recipeList[index].instructions.length;
    for (let i = 0; i < numLines; i++) {
      this.isEditingInstructions[index][i] = false;
    }
  }
  this.isEditingInstructions[index][0] = !this.isEditingInstructions[index][0];
  this.recipeService.saveRecipes();
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

}
