// header-inicio.component.ts

import { Component, ViewChild } from '@angular/core';
import { ModalLoginComponent } from '../modal-login/modal-login.component';
import {LoginService} from "../../servicios/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-inicio',
  templateUrl: './header-inicio.component.html',
  styleUrls: ['./header-inicio.component.css']
})
export class HeaderInicioComponent {
  @ViewChild(ModalLoginComponent) modalLoginComponent!: ModalLoginComponent;

  isLogged: boolean = false;

  constructor(private loginService: LoginService,private router:Router) { }

  openModal() {
    this.modalLoginComponent.openModal();
    this.isLogged = localStorage.getItem('isLogged') === 'true';
  }

  ngOnInit(): void {
    this.isLogged = localStorage.getItem('isLogged') === 'true';
    window.addEventListener('storage', this.storageEventListener.bind(this));
    console.log('no se que es esto', this.storageEventListener.bind(this));
  }


  ingresardatos(){
    this.isLogged = true;
  }


  storageEventListener(event: StorageEvent): void {
    if (event.key === 'isLogged') {
      this.isLogged = event.newValue === 'true';
    }
  }

  logout(): void {
    this.loginService.logout();
   this.isLogged= false;
    alert('logout successful');
    this.router.navigate(['/']);
    // Lógica adicional para manejar el cierre de sesión
  }

}
