import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from './store/store.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './login/AuthGuard';
import { DashboardModule } from './dashboard/dashboard.module';
import { CartModule } from './cart/cart.module';


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
    ReactiveFormsModule,
    HttpClientModule,
    DashboardModule, 
    CartModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
