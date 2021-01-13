import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeService} from '../../service/recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit, OnChanges {
  recipe: Recipe | any;
  id: number | any;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params.id;
        this.recipe = this.recipeService.getRecipe(this.id);
      });
  }

  addToShopping(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient);
  }
}
