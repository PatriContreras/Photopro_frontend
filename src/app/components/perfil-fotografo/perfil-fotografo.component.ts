import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';

@Component({
  selector: 'app-perfil-fotografo',
  templateUrl: './perfil-fotografo.component.html',
  styleUrls: ['./perfil-fotografo.component.scss']
})
export class PerfilFotografoComponent implements OnInit {

  idFotografo: Number;
  fotografo: Fotografo;

  constructor(
    private fotografoService: FotografoService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {

  }

  async ngOnInit() {



    this.fotografo = await this.fotografoService.fotografoById();
    console.log(this.fotografo);



  }


}
