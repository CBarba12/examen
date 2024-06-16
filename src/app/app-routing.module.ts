import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./conponentes/inicio/inicio.component";
import {PrincipalComponent} from "./conponentes/principal/principal.component";
import {MenuRestauranteComponent} from "./conponentes/menu-restaurante/menu-restaurante.component";

const routes: Routes = [

  {path:'',component:InicioComponent},
  {path:'principal',component:PrincipalComponent},
  {path:'Menu/:categoria',component:MenuRestauranteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
