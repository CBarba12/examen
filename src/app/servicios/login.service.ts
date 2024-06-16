import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/home/login';

  constructor(private http: HttpClient) { }

  login(id: string, password: string): Observable<boolean> {
    console.log("DENTRO DEL servicio login");

    return this.http.get<boolean>(`${this.apiUrl}/${id}/${password}`);
  }
}
