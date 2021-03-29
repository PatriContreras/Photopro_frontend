import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil-fotografo',
  templateUrl: './perfil-fotografo.component.html',
  styleUrls: ['./perfil-fotografo.component.scss']
})

export class PerfilFotografoComponent implements OnInit, AfterViewInit {

  idFotografo: Number;
  fotografo: Fotografo;
  favoritos: any;
  @ViewChild('portfolioButton') portfolioButton: ElementRef;
  ngAfterViewInit() { this.portfolioButton.nativeElement.click() }

  constructor(
    private fotografoService: FotografoService,
    private clienteService: UsuarioService,
    private router: Router,


  ) {

  }

  async ngOnInit() {



    this.fotografo = await this.fotografoService.fotografoById();
    console.log(this.fotografo);

    let button: HTMLElement = this.portfolioButton.nativeElement as HTMLElement;
    button.click();

  }

  async onClick() {

    this.favoritos = await this.clienteService.addFavoritos();
    console.log(this.favoritos);


  }


}
