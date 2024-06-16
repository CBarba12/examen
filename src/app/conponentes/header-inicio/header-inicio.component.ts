// header-inicio.component.ts

import { Component, ViewChild } from '@angular/core';
import { ModalLoginComponent } from '../modal-login/modal-login.component';

@Component({
  selector: 'app-header-inicio',
  templateUrl: './header-inicio.component.html',
  styleUrls: ['./header-inicio.component.css']
})
export class HeaderInicioComponent {
  @ViewChild(ModalLoginComponent) modalLoginComponent!: ModalLoginComponent;
  isLogged: boolean = false;

  openModal() {
    this.modalLoginComponent.openModal();
  }

  ngOnInit(): void {
    this.isLogged = localStorage.getItem('isLogged') === 'true';
    window.addEventListener('storage', this.storageEventListener.bind(this));
  }

  storageEventListener(event: StorageEvent): void {
    if (event.key === 'isLogged') {
      this.isLogged = event.newValue === 'true';
    }
  }

  logout(): void {
    localStorage.setItem('isLogged', 'false');
    this.isLogged = false;
    // Lógica adicional para manejar el cierre de sesión
  }

}
