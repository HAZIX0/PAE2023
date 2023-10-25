import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Register } from '../interfaces/register';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  userRegister(data: Register){
    return this.httpClient.post('http://localhost:3000/auth/register', data);
  }

}
