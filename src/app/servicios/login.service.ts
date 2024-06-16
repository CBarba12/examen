import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/hola/ProveedorAcciones';

  constructor(private http: HttpClient) { }

  login(nombre: string, password: string): Observable<String> {
     console.log("DENTRO DEl servicio login");

    return this.http.get<String>(`${this.apiUrl}/login`);
  }
}
