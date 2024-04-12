import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  categoryForm: FormGroup;

  constructor(
    private router: Router,
    private dashboardService: DashboardService,
    private formBuilder: FormBuilder
  ) {
    this.categoryForm = this.formBuilder.group({
      name: [''],
      description: [''],
      image: [this.handleFileInput],
    });
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
      var image = this.categoryForm.patchValue({ image: base64String });
      console.log(image);
    };

    reader.readAsDataURL(file);
  }

  saveClicked() {
    console.log('button clicked');
    console.log(this.categoryForm.value);

    var addCategory = {
      name: this.categoryForm.value.name,
      description: this.categoryForm.value.description,
      image: this.categoryForm.value.image,
    };

    console.log(addCategory);

    this.dashboardService.addCategory(addCategory).subscribe(
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
