import { Component } from '@angular/core';
import { Register } from 'src/app/shared/interfaces/register';
import { RegisterService } from 'src/app/shared/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  register: Register = {
    name: '',
    email: '',
    password: '',
    confirmation: '',
    accept: false
  };

  constructor(private registerService: RegisterService) {} 
  
  onSubmit() {
    this.registerService.userRegister(this.register).subscribe(
      (response: any) => {
        console.log('Respuesta de la API:', response);
      },
      (error) => {
        console.error('Error al registrar:', error);
      }
    );
  }
  

}
