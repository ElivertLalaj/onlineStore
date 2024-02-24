import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  url: string = 'http://localhost:8080/api/v1/'

  constructor(
    private http: HttpClient
  ) { }


  getCategory<T>() : Observable<T> {
    const headers = new HttpHeaders ({
      'content-type' : 'application/json'
    })
    return this.http.get<T>(this.url + "category" , {headers: headers});
  
  }

  addSendData(data: any) :Observable<any>{
    const headers = new HttpHeaders ({
      // 'Authorization': "Bearer " + localStorage.getItem('token'),
      'content-type' : 'application/json'
    })
    return this.http.post(this.url, data ,{headers : headers});
  }
} 
