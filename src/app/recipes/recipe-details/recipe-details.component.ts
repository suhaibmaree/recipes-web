import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Recipe} from '../recipe';
import {ShoppingListService} from '../../service/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit, OnChanges {
  @Input() selectedRecipe: Recipe | any;

  constructor(private sls: ShoppingListService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  ngOnInit(): void {
  }

  addToShopping(): void {
    this.sls.addItems(this.selectedRecipe.ingredient);
  }
}
