import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(
    private router: Router,
    private dashboardService: DashboardService,
    private formBuilder: FormBuilder
  ) {
    this.productForm = this.formBuilder.group({
      name: [''],
      description: [''],
      stock: [0],
      image: [this.handleFileInput],
      price: [0],
      category_id: [this.onCategoryChange],
    });
  }
  onCategoryChange() {
    const selectedCategoryId = this.productForm.value.category_id;
  }

  handleFileInput(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      const file = files.item(0);
      if (file) {
        this.convertToBase64(file);
      }
    }
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const base64String = e.target.result;
      this.productForm.patchValue({ image: base64String });
    };
    reader.readAsDataURL(file);
  }

  saveProductClicked() {
    var productData = {
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      stock: this.productForm.value.stock,
      image: this.productForm.value.image,
      price: this.productForm.value.price,
      category_id: this.productForm.value.category_id,
    };

    this.dashboardService.addProduct(productData).subscribe(
      (response) => {
        console.log('Response from backend: ', response);
        this.router.navigate(['/Dashboard']);
      },
      (error) => {
        console.error('error', error);
      }
    );
  }
}
