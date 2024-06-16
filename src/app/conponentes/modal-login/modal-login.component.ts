// modal-login.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from "../../servicios/login.service";

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent {
  showModal: boolean = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      console.log('esta es: ', username, password);

      this.loginService.login(username, password).subscribe(
        success => {
          if (success) {
            console.log('Login successful');
            alert('Login successful'); // Muestra una alerta de éxito

            localStorage.setItem('username', username);
            localStorage.setItem('pasword,', password);
            localStorage.setItem('isLogged', 'true');

            this.closeModal();
            // Aquí puedes añadir la lógica para redirigir al usuario o mostrar un mensaje de éxito
          } else {

            alert('Login failed try again');
            console.log('Login failed try again');

            // Aquí puedes añadir la lógica para manejar un fallo de inicio de sesión
          }
        },
        error => {
          console.error('Login error', error);
        }
      );
    }
  }
}


