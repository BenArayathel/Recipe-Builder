import { Injectable } from '@angular/core';
import { Recipe } from '../recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {

  recipeList: Recipe[];

  constructor( ) {

    let recipes = localStorage.getItem('recipeList');

    if(recipes){
      this.recipeList = JSON.parse(recipes);
    }else{
      this.recipeList = [];
    }
    this.saveRecipes();

   }


   

   getRecipes(): Recipe[]{
     return this.recipeList;
   }

   addToRecipes(recipe: Recipe){
     this.recipeList.push(recipe);
     this.saveRecipes();
    }

    deleteRecipes(index: number){
      this.recipeList.splice(index, 1)
      this.saveRecipes();
    }

    private saveRecipes(){
      localStorage.setItem('recipeList', JSON.stringify(this.recipeList));
    }

}
