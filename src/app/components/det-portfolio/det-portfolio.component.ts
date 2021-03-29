import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagenes } from 'src/app/interfaces/imagenes';
import { FotografoService } from 'src/app/servicios/fotografo.service';

@Component({
  selector: 'app-det-portfolio',
  templateUrl: './det-portfolio.component.html',
  styleUrls: ['./det-portfolio.component.scss']
})
export class DetPortfolioComponent implements OnInit {
  formulario: FormGroup;
  files;
  url: Imagenes[];
  constructor(private fotografoService: FotografoService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  async ngOnInit() {
    this.url = await this.fotografoService.getAllImages();
    console.log(this.url);

    this.activatedRouter.parent.params.subscribe(async params => {
      this.url = await this.fotografoService.getAllimagesByFotografo(params.fotografoId);
    })

  }


}
