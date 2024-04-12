import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AuthGuard } from '../login/AuthGuard';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IonicModule } from '@ionic/angular';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:"Eltistore" , component: StoreComponent , canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    StoreComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    IonicModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class StoreModule { }
