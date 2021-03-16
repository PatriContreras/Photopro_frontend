import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-fotografo',
  templateUrl: './perfil-fotografo.component.html',
  styleUrls: ['./perfil-fotografo.component.scss']
})
export class PerfilFotografoComponent implements OnInit {
  idFotografo: Number;
  constructor() {
    this.idFotografo = 2;
  }

  ngOnInit(): void {
  }


}
