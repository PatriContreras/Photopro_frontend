import { Component, OnInit } from '@angular/core';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  favoritos: Fotografo[];

  constructor(private clienteService: UsuarioService) {

  }

  async ngOnInit() {
    this.favoritos = await this.clienteService.getAllFavoritos()
    console.log(this.favoritos);

  }

}
