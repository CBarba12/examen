import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './conponentes/inicio/inicio.component';
import { FooterInicioComponent } from './conponentes/footer-inicio/footer-inicio.component';
import { HeaderInicioComponent } from './conponentes/header-inicio/header-inicio.component';
import { ModalLoginComponent } from './conponentes/modal-login/modal-login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PrincipalComponent } from './conponentes/principal/principal.component';
import { MenuRestauranteComponent } from './conponentes/menu-restaurante/menu-restaurante.component';
import { MenuCategoriaComponent } from './conponentes/menu-categoria/menu-categoria.component';
import { MenuOrdenComponent } from './conponentes/menu-orden/menu-orden.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterInicioComponent,
    HeaderInicioComponent,
    ModalLoginComponent,
    PrincipalComponent,
    MenuRestauranteComponent,
    MenuCategoriaComponent,
    MenuOrdenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
