import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from '../service/shopping-list.service';
import {Ingredient} from '../recipes/Ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor(private sls: ShoppingListService) {
  }

  ngOnInit(): void {
    this.items = this.sls.getItems();
  }

}
