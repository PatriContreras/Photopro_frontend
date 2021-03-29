import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil-fotografo',
  templateUrl: './perfil-fotografo.component.html',
  styleUrls: ['./perfil-fotografo.component.scss']
})
export class PerfilFotografoComponent implements OnInit {

  idFotografo: Number;
  fotografo: Fotografo;
  favoritos: any;

  constructor(
    private fotografoService: FotografoService,
    private clienteService: UsuarioService,
    private router: Router,


  ) {

  }

  async ngOnInit() {



    this.fotografo = await this.fotografoService.fotografoById();
    console.log(this.fotografo);



  }

  async onClick() {

    this.favoritos = await this.clienteService.addFavoritos();
    console.log(this.favoritos);


  }


}
