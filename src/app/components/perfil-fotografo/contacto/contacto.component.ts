import { Component, OnInit } from '@angular/core';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  fotografo: Fotografo

  constructor(private fotografoService: FotografoService) { }

  async ngOnInit() {
    this.fotografo = await this.fotografoService.fotografoById();
    console.log(this.fotografo);

  }

}
