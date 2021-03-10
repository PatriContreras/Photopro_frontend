import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PerfilClienteComponent } from './components/perfil-cliente/perfil-cliente.component';
import { PerfilFotografoComponent } from './components/perfil-fotografo/perfil-fotografo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccesoComponent } from './components/acceso/acceso.component';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    PrincipalComponent,
    PerfilClienteComponent,
    PerfilFotografoComponent,

    AccesoComponent,
    FormularioClienteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
