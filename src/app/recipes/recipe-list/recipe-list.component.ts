import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe';
import {LogService} from '../../service/log.service';
import {RecipeService} from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]  = [];
  constructor(private logService: LogService, private dataService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipes = this.dataService.getRecipes();
  }
}
