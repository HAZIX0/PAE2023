import { Component } from '@angular/core';
import { Login } from 'src/app/shared/interfaces/login';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: Login = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService) {} 

  onSubmit() {
    this.loginService.userLogin(this.login).subscribe(
      (response: any) => {
        console.log('Respuesta de la API:', response);
      },
      (error) => {
        console.error('Error al registrar:', error);
      }
    );
  }
  

}
