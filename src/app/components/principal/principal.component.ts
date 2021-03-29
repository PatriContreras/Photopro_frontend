import { NONE_TYPE } from '@angular/compiler';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  sideNavStyle: any;
  mainStyle: any;
  descubrirTexto: any;
  arrFotografos: Fotografo[];
  fotografo: any;
  filtros: any;




  constructor(private fotografoService: FotografoService,
    private activatedRoute: ActivatedRoute) {

    this.filtros = {}
    this.sideNavStyle = {
      width: 0,
    };

    this.mainStyle = {
      marginLeft: 0,
    };

  }

  async ngOnInit() {
    this.arrFotografos = await this.fotografoService.getAllFotografos();
    console.log(this.arrFotografos);
  }

  openNav() {
    console.log('Hola!');
    this.sideNavStyle = {
      width: '250px',
    };

    this.mainStyle = {
      marginLeft: '250px',
    }

  }

  closeNav() {
    this.sideNavStyle = {
      width: '0px',
    }

    this.mainStyle = {
      marginLeft: 0,
    }

    this.descubrirTexto = {

    }

  }

  onChange($event) {
    console.log($event.target);
    this.filtros[$event.target.value] = $event.target.checked;
    console.log(this.filtros);

  }

  async onClick() {


    this.arrFotografos = await this.fotografoService.getByCategory(this.filtros)





  }

  async deleteFiltros($event) {

    this.arrFotografos = await this.fotografoService.getAllFotografos();

  }


}


/* this.activatedRoute.params.subscribe(async params => {

  this.fotografo = await this.fotografoService.fotografoById(params.fotografoId);
-      console.log(this.fotografo);
+      console.log('fotografo perfilfot ngoninit', this.fotografo);

*/