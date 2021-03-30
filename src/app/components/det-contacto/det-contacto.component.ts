import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';

@Component({
  selector: 'app-det-contacto',
  templateUrl: './det-contacto.component.html',
  styleUrls: ['./det-contacto.component.scss']
})
export class DetContactoComponent implements OnInit {

  fotografo: Fotografo

  constructor(private fotografoService: FotografoService,
    private activatedRouter: ActivatedRoute) { }


  ngOnInit() {

    this.activatedRouter.parent.params.subscribe(async params => {


      this.fotografo = await this.fotografoService.getContactoById(params.fotografoId)




    })
  }

}
