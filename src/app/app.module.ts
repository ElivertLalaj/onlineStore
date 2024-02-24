import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from './store/store.module';
import { ClothesDetailsModule } from './clothes-details/clothes-details.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddStoreModule } from './store/add-store/add-store.module';
import { AuthGuard } from './login/AuthGuard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule,
    ClothesDetailsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AddStoreModule,

  

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
