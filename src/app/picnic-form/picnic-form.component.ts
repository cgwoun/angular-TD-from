import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picnic-form',
  templateUrl: './picnic-form.component.html',
  styleUrls: ['./picnic-form.component.css']
})
export class PicnicFormComponent implements OnInit {
  //Different Picnic Categories
  categories = ['Dessert','Games','Drinks','Food','Extra'];

  dessertItem: PicnicItem[];
  gamesItem: PicnicItem[];
  foodItem: PicnicItem[];
  extraItem: PicnicItem[];
  drinkItem: PicnicItem[];

  constructor() { }

  ngOnInit() {
    this.gamesItem = [{'item':'Bean Bag','name':'Jeff C.'}];
    this.extraItem = [{'item':'Piñata','name':'Oscar K.'}];
    this.dessertItem = [{'item':'Lava Cake','name':'Chang G.'}];
    this.drinkItem = [{'item':'Patron','name':'Bob P.'}];
    this.foodItem = [{'item':'Brisket','name':'Boeing'}];
  }

}

interface PicnicItem{
  item: string,
  name: string
}
