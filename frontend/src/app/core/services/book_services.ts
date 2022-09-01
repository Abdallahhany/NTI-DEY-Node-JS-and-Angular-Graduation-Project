import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookServices {
  constructor(private _http: HttpClient) {}
  baseURL = 'http://localhost:3000/api/books';
  book: Book | null = null;

  addBook(data: Book): Observable<any> {
    return this._http.post(`${this.baseURL}/add`, data);
  }
  getAllBooks(): Observable<any> {
    return this._http.get(`${this.baseURL}/`);
  }
  getSingleBook(id: string): Observable<any> {
    return this._http.get(`${this.baseURL}/single/${id}`);
  }
  updateBook(id: string, data: Book): Observable<any> {
    return this._http.put(`${this.baseURL}/single/${id}`, data);
  }
  deleteBook(id: string): Observable<any> {
    return this._http.delete(`${this.baseURL}/delete/${id}`);
  }
}
