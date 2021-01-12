import {Ingredient} from './Ingredient';

export class Recipe {
  constructor(public name: string, public description: string, public imagePath: string, private ingredient?: Ingredient[]) {
  }
}
