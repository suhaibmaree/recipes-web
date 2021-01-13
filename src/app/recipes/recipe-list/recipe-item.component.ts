import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe | any ;
  @Input() recipeId: number | any;
  constructor() { }

  ngOnInit(): void {
  }

}
