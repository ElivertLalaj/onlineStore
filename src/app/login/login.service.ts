import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, TokenResponse } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  url = 'http://localhost:8080/api/v1/'

  constructor(
    private http: HttpClient
  ) { }


  getToken(user: IUser) : Observable<TokenResponse>{
    const headers = new HttpHeaders ({
      'Content-Type' : 'application/json'
    })
    return this.http.post<TokenResponse>(this.url + "login", user , {headers: headers});
  }

  

  

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token')
  }


}
