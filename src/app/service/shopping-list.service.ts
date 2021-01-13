import {Injectable} from '@angular/core';
import {Ingredient} from '../recipes/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() {
  }

  getItems(): Ingredient[] {
    return this.items;
  }

  addIngredients(items: Ingredient[]): void {
    Array.prototype.push.apply(this.items, items);
  }
}
