import { Component, OnInit } from '@angular/core';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';

@Component({
  selector: 'app-det-contacto',
  templateUrl: './det-contacto.component.html',
  styleUrls: ['./det-contacto.component.scss']
})
export class DetContactoComponent implements OnInit {

  fotografo: Fotografo

  constructor(private fotografoService: FotografoService) { }

  async ngOnInit() {
    this.fotografo = await this.fotografoService.fotografoById();
    console.log(this.fotografo);
  }

}
