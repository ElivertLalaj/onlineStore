import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AuthGuard } from '../login/AuthGuard';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'addCategory', component: AddCategoryComponent, canActivate: [AuthGuard] },
  { path: 'addProduct', component: AddProductComponent, canActivate: [AuthGuard] },

];



@NgModule({
  declarations: [
    DashboardComponent,
    AddCategoryComponent,
    AddProductComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
