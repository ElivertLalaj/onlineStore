import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  // price: number = 12

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
