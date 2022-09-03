import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartServices {

  baseUrl= "http://localhost:3000/api/carts";
  constructor(private http:HttpClient) { }

  addBookToCart(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/add`,data);
  }

  getCartBooks():Observable<any>{
    return this.http.get(`${this.baseUrl}/show`);
  }
}
