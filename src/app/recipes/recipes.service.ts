import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] =[
    {
      id:'r1',
      title:'Hagimaru',
      imageUrl:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      ingredints: ['pogo','cable','power'],
    },
    {
      id:'r2',
      title:'Maggie',
      imageUrl:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      ingredints: ['maggie','water','maggi masala'],
    },
    {
      id:'r3',
      title:'Doremon',
      imageUrl:'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
      ingredints: ['maggie','water','maggi masala'],
    },  
  ];
  
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }
  geteRecipe(recipeId:string){
    return{
      ...this.recipes.find(recipe => {
        return recipe.id ===recipeId;
      }),
    }
  }
}
