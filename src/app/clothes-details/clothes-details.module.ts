import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothesDetailsComponent } from './clothes-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {path:"Details" , component: ClothesDetailsComponent }
];


@NgModule({
  declarations: [
    ClothesDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ClothesDetailsModule { }
