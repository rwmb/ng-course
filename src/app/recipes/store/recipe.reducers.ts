
import { Recipe } from "app/recipes/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes: State
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
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
  ]
}

export function recipeReducer (state = initialState, action: RecipeActions.Action) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case RecipeActions.UPDATE_RECIPE:
      const recipes = [...state.recipes];
      recipes[action.payload.index] = action.payload.updatedRecipe;
      return {
        ...state,
        recipes
      };
    case RecipeActions.DELETE_RECIPE:
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      }
    default:
      return state;
  }
}
