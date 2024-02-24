import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseModel } from 'src/app/models/ResponseModel';
import { Category } from 'src/app/models/store';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent {
  form: FormGroup
  category: Category[] = []


  constructor(
    private fb:  FormBuilder,
    private storeService: StoreService,
    private router : Router,

  ){

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      createtAt: ['', Validators.required]

    })
  }
  onSubmit(){

    console.log("onSubmit")
    var addStore = {
      name: this.form.value.name,
      description: this.form.value.description,
      image: this.form.value.image,
      createDate: new Date().toISOString()
    };

    this.storeService.addSendData(addStore).subscribe((response) => {
      console.log("Response from backend: ", response)
      this.router.navigate(["/EltiStore"])
    },
      (error) => {
        console.error("error", error)
      },
    )
}

}