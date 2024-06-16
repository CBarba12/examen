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

  openModal() {
    this.modalLoginComponent.openModal();
  }
}
