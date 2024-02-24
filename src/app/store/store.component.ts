import { Component } from '@angular/core';
import { Category } from '../models/store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {



  category: Category[] = []

  constructor() {}

  showWomenClothes = false;
  showMenClothes = false




  onClickWomenClothes(){
  this.showMenClothes = false

    this.showWomenClothes = true

  }

  onClickMenClothes(){

  this.showWomenClothes = false

  this.showMenClothes = true


  }


  save(){}

  byNow(){}


}
