import { Component } from '@angular/core';
import { StoreComponent } from '../store/store.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CartService } from './cart.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  store: any[] = [];
  cartForm: FormGroup;

  constructor(private form: FormBuilder, private appcomponent: AppComponent) {
    this.appcomponent.ShowHeader = true;

    this.cartForm = this.form.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zip_code: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const storedData = localStorage.getItem('cartItems');
    if (storedData) {
      this.store = JSON.parse(storedData);
    }
  }

  removeFromCart(index: number) {
    this.store.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(this.store));
  }

  sendEmail() {
    const store: any = this.store;
    const cartFormValue = this.cartForm.value;
    console.log('cartFormValue: ' + cartFormValue);
    console.log('store: ' + store);
  }

  increment(index: number): void {
    this.store[index].number++;
    this.updateLocalStorage();
  }

  decrement(index: number): void {
    if (this.store[index].number > 1) {
      this.store[index].number--;
      this.updateLocalStorage();
    }
  }

  updateLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.store));
  }
}
