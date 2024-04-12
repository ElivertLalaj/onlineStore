import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { IUser } from '../models/login';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  token: any = 'token';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private appcomponent: AppComponent,
    private fb: FormBuilder
  ) {
    this.appcomponent.ShowHeader = false;
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (Error) {
      return null;
    }
  }

  onSubmit() {
    this.token = 'token';

    var userData: IUser = {
      password: this.loginForm.value.password,
      username: this.loginForm.value.username,
    };

    this.loginService.getToken(userData).subscribe((TokenResponse) => {
      console.log('Successful login');

      this.token = TokenResponse.accessToken;
      localStorage.setItem('token', this.token);

      var decodeToken = this.getDecodedAccessToken(this.token);

      console.log('decodeToken');
      console.log(decodeToken['roles']);

      if (decodeToken['roles'] == 'ADMIN') {
        this.router.navigate(['/Dashboard']);
      } else if (decodeToken['roles'] == 'SUPER_ADMIN') {
        this.router.navigate(['/Dashboard']);
      } else if (decodeToken['roles'] == 'USER') {
        this.router.navigate(['/Eltistore']);
      }
    });
  }
}
