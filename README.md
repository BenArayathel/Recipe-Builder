# Recipe Builder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Description

The recipe website is a web application that allows users to create, edit, and delete recipes, as well as search for specific recipes by title. When the user first visits the website, they are presented with a list of all the recipes they've created. From this list, the user can view the details of each recipe, as well as edit or delete a recipe.

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Application User Stories 

## User Types 

Chef : This webpage is designed for chefs to be able 

## As a user, I want to be able to create a new recipe by filling out a form with a recipe title, list of ingredients, and cooking instructions 
- [] The recipe form should have fields for the recipe title, ingredients, and instructions.
- [] The user should be able to submit the form to create a new recipe.
- [] The new recipe should be added to the list of recipes.
- [] The form fields should be cleared after the recipe is submitted.

## As a user, I want to be able to view a list of all the recipes I've created 
- [] The recipe list should display the title of each recipe.
- [] Each recipe in the list should be clickable to view its details.
- [] The list should be sorted alphabetically by recipe title.

## As a user, I want ot be able to delete a recipe from the list of recipes 
- [] Each recipe in the list should have a delete button.
- [] Clicking the delete button should remove the recipe from the list.
- [] The user should be prompted to confirm the deletion.

## As a user, I want to be able to edit an existing recipe by selecting it from the list of recipes and updating its title, ingredients, or cooking instructions 
- [] The user can click on any property of the recipe (title, ingredient, or instruction) to edit it in place.
- [] When a user clicks on a property to edit it, the property should become an input field that the user can edit.
- [] The user can save the changes by pressing Enter or clicking outside the input field.
- [] The recipe list should be updated to reflect the changes.

## As a user, I want to be able to search for a specific recipe by entering its title in a search box
- [] The recipe list should have a search box for entering the recipe title.
- [] As the user types in the search box, the list of recipes should be filtered to show only the recipes that match the search query.
- [] The search should match partial words.
