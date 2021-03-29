import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { Imagenes } from 'src/app/interfaces/imagenes';
import { FotografoService } from 'src/app/servicios/fotografo.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  formulario: FormGroup;
  files;
  url: Imagenes[];

  constructor(
    private fotografoService: FotografoService,
    private router: Router
  ) { }

  async ngOnInit() {

    this.url = await this.fotografoService.getAllImages();
    console.log(this.url);



  }



  onSubmit() {
    let fd = new FormData();
    fd.append('imagen', this.files[0]);



    this.fotografoService.createImage(fd).then(result => {
      this.router.navigate(['fotografo/portfolio'])
      console.log('navigate', result);


    })

  }
  onChange($event) {
    this.files = $event.target.files;
    console.log('$event', $event.target.files)

  }

}
