import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  userLogin(data: Login){
    return this.httpClient.post('http://localhost:3000/auth/login', data);
  }

}
