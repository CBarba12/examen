import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  nombre: string = '';
  password: string = '';
  isLogged: boolean = false;
  private apiUrl = 'http://localhost:8080/home/login';

  constructor(private http: HttpClient) { }

  login(id: string, password: string): Observable<boolean> {
    console.log("DENTRO DEL servicio login");

    return this.http.get<boolean>(`${this.apiUrl}/${id}/${password}`);
  }









  //--------------------------------------------------------------------




  guardar_login(nom: string, pass: string) {

    this.nombre =nom ;
    this.password == pass;
    this.isLogged = true;
  }


  validarLogin(): boolean {
    return this.isLogged;
  }


  logout() {
    this.isLogged = false;
    this.nombre = '';
    this.password = '';


    localStorage.removeItem('isLogged');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
}
