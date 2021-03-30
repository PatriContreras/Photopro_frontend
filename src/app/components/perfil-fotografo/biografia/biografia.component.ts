import { Component, OnInit } from '@angular/core';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';

@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.scss']
})
export class BiografiaComponent implements OnInit {

  fotografo: Fotografo
  constructor(private fotografoService: FotografoService) { }

  async ngOnInit() {
    this.fotografo = await this.fotografoService.fotografoById();
    console.log(this.fotografo);
  }

}
