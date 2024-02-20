import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothesDetailsComponent } from './clothes-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { IonicModule } from '@ionic/angular';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
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
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    IonicModule,
    MatRadioModule,
    MatInputModule
  ]
})
export class ClothesDetailsModule { }
