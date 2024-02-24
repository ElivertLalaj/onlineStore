import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStoreComponent } from './add-store.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'addStore', component: AddStoreComponent},

];


@NgModule({
  declarations: [
    AddStoreComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class AddStoreModule { }
