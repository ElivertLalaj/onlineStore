import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { AuthGuard } from '../login/AuthGuard';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
{path:"cart", component:CartComponent , canActivate: [AuthGuard]}
];




@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    MatCardModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
