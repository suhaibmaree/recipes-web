import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe';
import {LogService} from '../../service/log.service';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]  = [];
  constructor(private logService: LogService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.recipes = this.dataService.getData();
  }

  onSelected(recipe: Recipe): void {
    this.recipeSelected.emit(recipe);
    this.logService.writeToLog(recipe.name);
  }
}
