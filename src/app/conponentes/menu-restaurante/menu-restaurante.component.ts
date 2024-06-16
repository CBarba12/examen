import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../servicios/categoria.service';

@Component({
  selector: 'app-menu-restaurante',
  templateUrl: './menu-restaurante.component.html',
  styleUrls: ['./menu-restaurante.component.css']
})
export class MenuRestauranteComponent implements OnInit {
  categoriaSeleccionada: any;

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,

  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoriaNombre = params.get('categoria');

      console.log('Nombre de categoría: estoy en menu', categoriaNombre);

      // Llama a obtenerCategoriaPorNombre o similar, dependiendo de cómo esté configurado tu servicio
      if(categoriaNombre != null)
      this.obtenerCategoriaPorNombre(categoriaNombre);



    });
  }

  obtenerCategoriaPorNombre(nombre: string): void {

    this.categoriaService.obtenerCategoriaPorNombre(nombre).subscribe(
      categoria => {
        this.categoriaSeleccionada = categoria;
        console.log('Categoría obtenida:', this.categoriaSeleccionada);
      },
      error => {
        console.error('Error al obtener categoría:', error);
      }
    );
  }
}

