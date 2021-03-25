import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';

@Component({
  selector: 'app-menu-ajustes',
  templateUrl: './menu-ajustes.component.html',
  styleUrls: ['./menu-ajustes.component.scss']
})
export class MenuAjustesComponent implements OnInit {

  idfotografo: Fotografo;
  fotografoid: number;

  constructor(
    private fotografoService: FotografoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {


  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   this.idfotografo = params.fotografoId;
    //   //console.log(this.idfotografo);


    // })
  }


  async onClick() {



    const response = await this.fotografoService.deleteFotografo()
    console.log('estas en response de delete', response);

  }


}


