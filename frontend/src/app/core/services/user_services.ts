import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  constructor(private _http: HttpClient) {}
  baseURL = 'http://localhost:3000/api/users';
  user: User | null = null;
  isLoggedIn: boolean = false;

  register(data: User): Observable<any> {
    return this._http.post(`${this.baseURL}/register`, data);
  }
  login(data: any): Observable<any> {
    return this._http.post(`${this.baseURL}/login`, data);
  }
  logout(): Observable<any> {
    return this._http.get(`${this.baseURL}/logout`);
  }
  getMe(): Observable<any> {
    return this._http.get(`${this.baseURL}/me`);
  }
  updatePassword(data: {
    oldPassword: string;
    newPassword: string;
  }): Observable<any> {
    return this._http.put(`${this.baseURL}/password/update`, data);
  }
  updateProfile(data: { userName: string; email: string }): Observable<any> {
    return this._http.put(`${this.baseURL}/me/update`, data);
  }
  getAllUsers(): Observable<any> {
    return this._http.get(`${this.baseURL}/admin/users`);
  }
  getSingleUser(id: string): Observable<any> {
    return this._http.get(`${this.baseURL}/admin/single/${id}`);
  }
  updateUserRole(id: string, data: { role: string }): Observable<any> {
    return this._http.put(`${this.baseURL}/admin/user/${id}`, data);
  }
  deleteUser(id: string): Observable<any> {
    return this._http.delete(`${this.baseURL}/admin/user/${id}`);
  }
}
