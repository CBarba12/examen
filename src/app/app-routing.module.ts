import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./conponentes/inicio/inicio.component";
import {PrincipalComponent} from "./conponentes/principal/principal.component";

const routes: Routes = [

  {path:'',component:InicioComponent},
  {path:'principal',component:PrincipalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
