import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Big Belly Burger',
      'Delicious burger with french fries',
      'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
        new Ingredient('Buns', 1),
        new Ingredient('Salad', 1),
        new Ingredient('Cheddar', 50)
      ]),
    new Recipe('Vegetables Italian Pizza',
      'What else you need to say?',
      'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
      [
        new Ingredient('Vegetables', 1),
        new Ingredient('Pizza', 1),
        new Ingredient('An Italian', 1)
      ])
  ];

  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
