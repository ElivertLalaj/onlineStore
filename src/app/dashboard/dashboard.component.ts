import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseModel } from 'src/app/models/ResponseModel';
import { Category } from 'src/app/models/store';
import { DashboardService } from './dashboard.service';
import { IProduct } from '../models/product';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  category: Category[] = [];
  product: IProduct[] = [];

  roles = {
    ADMIN: false,
    SUPER_ADMIN: false,
    EMPLOYEE: false,
    USER: false,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dashBoardService: DashboardService,
    private authService: AuthService,
    private appcomponent: AppComponent
  ) {
    this.appcomponent.ShowHeader = true;

    let role = this.authService.getRole();
    if (role == 'ADMIN') {
      this.roles.ADMIN = true;
    } else if (role == 'SUPER_ADMIN') {
      this.roles.SUPER_ADMIN = true;
    } else if (role == 'EMPLOYEE') {
      this.roles.EMPLOYEE = true;
    } else if (role == 'USER') {
      this.roles.USER = true;
    }
    if (!(this.roles.SUPER_ADMIN || this.roles.ADMIN || this.roles.EMPLOYEE)) {
      this.router.navigate(['/Eltistore']);
    }
  }

  ngOnInit() {
    this.getCategory();
    this.getProduct();
  }

  getCategory() {
    this.dashBoardService.getCategory<ResponseModel<Category[]>>().subscribe({
      next: (data: ResponseModel<Category[]>) => {
        this.category = data.data;
      },
      error: (error: any) => {
        console.error('error fetching stores: ', error);
      },
    });
  }

  getProduct() {
    this.dashBoardService.getProduct<ResponseModel<IProduct[]>>().subscribe({
      next: (data: ResponseModel<IProduct[]>) => {
        this.product = data.data;
      },
      error: (error: any) => {
        console.error('error fetching stores: ', error);
      },
    });
  }

  deleteCategoryButtonClicked(StoreId: any) {
    console.log('Delete Button Clicked');
    const confirmation = window.confirm(
      'Are you sure you want to delete this category?'
    );
    if (confirmation) {
      this.dashBoardService
        .deleteCategory<ResponseModel<Category>>(StoreId)
        .subscribe({
          next: (data: ResponseModel<Category>) => {
            this.getCategory();
          },
        });
    }
  }

  deleteProductButtonClicked(ID: any) {
    const confirmation = window.confirm(
      'Are you sure you want to delete this product?'
    );

    if (confirmation) {
      this.dashBoardService
        .deleteProduct<ResponseModel<IProduct>>(ID)
        .subscribe({
          next: (data: ResponseModel<IProduct>) => {
            this.getProduct();
          },
        });
    }
  }

  hasRole(role: String): Boolean {
    return role == role;
  }

  addCategory() {
    this.router.navigate(['/addCategory']);
  }
  addProduct() {
    this.router.navigate(['/addProduct']);
  }
}
