import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-picnic-form',
  templateUrl: './picnic-form.component.html',
  styleUrls: ['./picnic-form.component.css']
})

export class PicnicFormComponent implements OnInit {
  //Submit form reference
  @ViewChild('td') picnicForm: NgForm;

  //Different Picnic Categories
  categories = ['Dessert','Games','Drinks','Side'];

  item = {
    'Dessert':[],
    'Games':[],
    'Drinks':[],
    'Side':[],
    'CompanyProvided':[]
  };

  constructor() { }

  ngOnInit() {
    this.item['Games'] = [{'item':'Bean Bag Toss','name':'Jeff C.'},{'item':'Piñata ;)','name':'Chang G.'}];
    this.item['Drinks'] = [];
    this.item['Dessert'] = [{'item':'Hot Fudge Sundaes with Sprinkles 0_o','name':'Oscar K.'}];
    this.item['Side'] = [];
    this.item['CompanyProvided'] = [
        {'item':'Tri-tip, Chicken & Vegetarian Entree','name':'Boeing'},
        {'item':'Plates, napkins, utensils','name':'Boeing'},
        {'item':'Water','name':'Boeing'}
    ];
  }

  onSubmit(){
    var picItem = this.picnicForm.value;
    this.item[picItem.category].push(
      {'item':picItem.item,'name':picItem.name}
    );
    this.picnicForm.reset();
  }


}


