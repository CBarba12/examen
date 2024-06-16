import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../servicios/categoria.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-categoria',
  templateUrl: './menu-categoria.component.html',
  styleUrls: ['./menu-categoria.component.css']
})
export class MenuCategoriaComponent implements OnInit {

  categorias: any[];
  categoriaSeleccionada: any;

  constructor(private categoriaService: CategoriaService,private router: Router) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(): void {
    console.log("Inicio de obtenerCategorias");
    this.categoriaService.obtenerCategorias().subscribe(
      categorias => {
        console.log("Dentro de obtenerCategorias, categorías recibidas:");
        this.categorias = categorias;
        console.log(this.categorias);
      },
      error => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }



  seleccionarCategoria(categoria: any): void {
    this.categoriaSeleccionada = categoria;
    console.log('Categoría seleccionada:', this.categoriaSeleccionada);
    this.router.navigate(['/Menu', categoria]);

  }
}
