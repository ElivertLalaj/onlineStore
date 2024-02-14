import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import { MatCardModule } from '@angular/material/card';


const routes: Routes = [
  {path:"Eltistore" , component: StoreComponent }
];


@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    MatCardModule
  ]
})
export class StoreModule { }
