import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoComponent } from './components/acceso/acceso.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilClienteComponent } from './components/perfil-cliente/perfil-cliente.component';
import { PerfilFotografoComponent } from './components/perfil-fotografo/perfil-fotografo.component';
import { PrincipalComponent } from './components/principal/principal.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'registro', component: FormularioComponent },
  { path: 'login', component: AccesoComponent },
  { path: 'usuario', component: PerfilClienteComponent },
  { path: 'fotografo', component: PerfilFotografoComponent },
  { path: 'descubrir', component: PrincipalComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
