import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  url = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getCategory<T>(): Observable<T> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    return this.http.get<T>(this.url + 'category', { headers: headers });
  }

  deleteCategory<T>(StoreId: number): Observable<T> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    return this.http.delete<T>(this.url + 'category' + `/${StoreId}`, {
      headers: headers,
    });
  }

  addCategory(data: any) {
    const url = this.url + 'category';
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    });

    return this.http.post(url, data, { headers: headers });
  }

  getProduct<T>(): Observable<T> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    return this.http.get<T>(this.url + 'product', { headers: headers });
  }

  deleteProduct<T>(ID: number): Observable<T> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    return this.http.delete<T>(this.url + 'product' + `/${ID}`, {
      headers: headers,
    });
  }

  addProduct(data: any) {
    const url = this.url + 'product/add';
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    });

    return this.http.post(url, data, { headers: headers });
  }
}
