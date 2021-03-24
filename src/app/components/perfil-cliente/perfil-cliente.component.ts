import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.scss']
})
export class PerfilClienteComponent implements OnInit {

  idCliente: Number;
  cliente: Cliente;


  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: UsuarioService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      console.log('params', params)

      this.cliente = await this.clienteService.clienteById(params.clienteId)
      console.log('cliente oni', this.cliente);

    });
  }
}

