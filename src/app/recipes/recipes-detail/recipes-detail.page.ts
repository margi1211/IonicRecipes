import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {

 loadedRecipe: Recipe;
 
  constructor(private activatedRoute: ActivatedRoute,private recipesService:RecipesService,private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('recipeId')){
        this.router.navigate(['recipes'])
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe=this.recipesService.geteRecipe(recipeId);

      if(!this.loadedRecipe.id){
        this.router.navigate(['recipes']);
      }
    });
  }

  onDeleteClick(){
      this.recipesService.deleteRecipe(this.loadedRecipe.id);
      this.router.navigate(['recipes'])
  }

}
