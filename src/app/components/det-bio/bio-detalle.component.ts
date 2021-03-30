import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';

@Component({
  selector: 'app-bio-detalle',
  templateUrl: './bio-detalle.component.html',
  styleUrls: ['./bio-detalle.component.scss']
})
export class BioDetalleComponent implements OnInit {

  fotografo: Fotografo

  constructor(private fotografoService: FotografoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.parent.params.subscribe(async params => {
      this.fotografo = await this.fotografoService.getBioById(params.fotografoId)
    })




  }

}
