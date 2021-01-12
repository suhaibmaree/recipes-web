import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe';
import {Ingredient} from '../recipes/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = [
    new Recipe('First', 'Dummy', 'https://dummyimage.com/600x400/000/fff',
      [new Ingredient('first ing', 2), new Ingredient('second ing', 1)])
    , new Recipe('Second', 'Dummy', 'https://dummyimage.com/400x400/000/646799&text=HI',
      [new Ingredient('thr ing', 3), new Ingredient('four ing', 1)])
  ];

  getData(): Recipe[] {
    return this.data;
  }
}
