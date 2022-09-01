import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {

  baseUrl="http://localhost:3000/api/books/";
  constructor(private _http:HttpClient) { }

  getAllBooks():Observable<any>{
    return this._http.get(`${this.baseUrl}`);
  }

  getSingleBook(id:any):Observable<any>{
    return this._http.get(`${this.baseUrl}single/${id}`);
  }

  addBook(data:Book):Observable<any>{
    return this._http.post(`${this.baseUrl}add`,data);
  }

  updateBook(id:any,data:any):Observable<any>{
    return this._http.put(`${this.baseUrl}update/${id}`,data);
  }

  deleteBook(id:any):Observable<any>{
    return this._http.delete(`${this.baseUrl}delete/${id}`);
  }
}
