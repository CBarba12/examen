import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './conponentes/inicio/inicio.component';
import { FooterInicioComponent } from './conponentes/footer-inicio/footer-inicio.component';
import { HeaderInicioComponent } from './conponentes/header-inicio/header-inicio.component';
import { ModalLoginComponent } from './conponentes/modal-login/modal-login.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterInicioComponent,
    HeaderInicioComponent,
    ModalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
