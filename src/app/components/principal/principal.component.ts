import { NONE_TYPE } from '@angular/compiler';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
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
  filtros: any;




  constructor(private fotografoService: FotografoService) {
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

}
