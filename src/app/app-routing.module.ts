import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoComponent } from './components/acceso/acceso.component';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';

import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilClienteComponent } from './components/perfil-cliente/perfil-cliente.component';
import { AjustesComponent } from './components/perfil-fotografo/ajustes/ajustes.component';
import { BiografiaComponent } from './components/perfil-fotografo/biografia/biografia.component';
import { OpinionesComponent } from './components/perfil-fotografo/opiniones/opiniones.component';
import { PerfilFotografoComponent } from './components/perfil-fotografo/perfil-fotografo.component';
import { PortfolioComponent } from './components/perfil-fotografo/portfolio/portfolio.component';
import { PrincipalComponent } from './components/principal/principal.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'registro_fotografo', component: FormularioComponent },
  { path: 'login', component: AccesoComponent },
  { path: 'registro_cliente', component: FormularioClienteComponent },
  { path: 'usuario', component: PerfilClienteComponent },
  {
    path: 'fotografo/:fotografoId', component: PerfilFotografoComponent,
    children: [
      {
        path: 'opiniones', component: OpinionesComponent
      },
      {
        path: 'bio', component: BiografiaComponent
      },
      {
        path: 'portfolio', component: PortfolioComponent
      },
      {
        path: 'ajustes', component: AjustesComponent
      }

    ]
  },

  { path: 'cliente', component: PerfilClienteComponent },
  { path: 'fotografo', component: PerfilFotografoComponent },
  { path: 'descubrir', component: PrincipalComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
