import { Component } from '@angular/core';
import { DashboardService } from './dashboard/dashboard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './login/auth.service';
import { StoreService } from './store/store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    private storeService: StoreService
  ){
    this.ShowHeader = true
  }
  // numberOfProductsOnCart: number = 0

  ShowHeader = true

  addProductToCart: boolean = false;



  ngOnInit() {
    this.storeService.cartUpdated$.subscribe(() => {
      this.addProductToCart = true;
      
    });
   
  }
  
  
}