import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../models/store';
import { AuthService } from '../login/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StoreService } from './store.service';
import { ResponseModel } from '../models/ResponseModel';
import { IProduct } from '../models/product';
import { AppComponent } from '../app.component';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  selectedItem: any = {}; 
  isOffcanvasOpen: boolean = false;
  form: FormGroup
  category: Category[] = []
  product: IProduct[] = []
  showWomenClothes = false;
  showMenClothes = false
  showChildClothes = false

  constructor(
    private cdr: ChangeDetectorRef,
    private fb :  FormBuilder,
    private authService: AuthService,
    private storeService: StoreService,
    private appcomponent: AppComponent,

  ) {

    this.appcomponent.ShowHeader = true;

    this.form = this.fb.group({
      description: ["" ,this.selectedItem.description], 
      color: [''],
      size: [''], 
      number: [1],  

      })


  let token =  this.authService.getRole()
  console.log(token)



  }



  ngOnInit(){
    this.getCategory()
    this.getProduct()
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const formData = JSON.parse(storedData);
      this.form.patchValue(formData);
    }
  }

  getCategory(){
    this.storeService.getCategory<ResponseModel<Category[]>>().subscribe({
      next: (data : ResponseModel<Category[]>)=>{
        this.category = data.data
        console.log(this.category);
      }
    })
  }
  

  getProduct(){
    this.storeService.getProduct<ResponseModel<IProduct[]>>().subscribe({
      next: (data : ResponseModel<IProduct[]>)=>{
        this.product = data.data
        console.log(this.product);
        
      }
    })
  }

 

  
  openOffcanvas(item: any) {
    console.log('Item selected:', item);
    this.selectedItem = item;
    this.isOffcanvasOpen = true;
    this.cdr.detectChanges();
  }

  onClickWomenClothes(){
  this.showMenClothes = false
  this.showChildClothes = false


    this.showWomenClothes = true

  }

  onClickMenClothes(){

  this.showWomenClothes = false
  this.showChildClothes = false

  this.showMenClothes = true


  }
  onClickChildClothes(){
    this.showWomenClothes = false
    this.showMenClothes = false

    this.showChildClothes = true


  }


  Buy(){

    console.log("Bay method called");
    console.log("this.form.value", this.form.value);
    console.log("Selected item description:", this.selectedItem.description);


  }
  Save(){
    const existingCartItems = localStorage.getItem('cartItems');
    const cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];
    const formData = this.form.value;
    const completeData = { ...formData, description: this.selectedItem.description , image: this.selectedItem.image };
    cartItems.push(completeData);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.storeService.updateCartState();
   
  }
  increment() {
    const numberControl = this.form.get('number');
    if (numberControl) { 
      numberControl.setValue((numberControl.value || 0) + 1); 
    }
  }
  
  decrement() {
    const numberControl = this.form.get('number');
    if (numberControl && numberControl.value > 1) { 
      numberControl.setValue(numberControl.value - 1); 
    }
  }

 
}
