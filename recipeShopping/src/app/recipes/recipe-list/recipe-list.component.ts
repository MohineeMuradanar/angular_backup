import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('T Test Recipe', 'This is simply test', 'https://www.vegrecipesofindia.com/wp-content/uploads/2013/11/instant-pot-chana-masala-recipe-3-280x280.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
