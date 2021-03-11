import { NONE_TYPE } from '@angular/compiler';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  sideNavStyle: any;
  mainStyle: any;
  descubrirTexto: any;

  constructor() {
    this.sideNavStyle = {
      width: 0,
    };

    this.mainStyle = {
      marginLeft: 0,
    };

  }

  ngOnInit(): void {
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

}
