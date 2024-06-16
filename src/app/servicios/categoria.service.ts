import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:8080/platillos/listar_por_categoria';

  private URL2 = 'http://localhost:8080/platillos/listarplatillo';

  constructor(private http: HttpClient) { }

  obtenerCategorias(): Observable<any[]> {
    console.log("dentro del services de categoria")
    return this.http.get<any[]>(this.apiUrl);
  }




  obtenerCategoriaPorNombre(nombre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL2}/${nombre}`); // Utiliza interpolación de cadenas para concatenar la URL correctamente
  }




}
