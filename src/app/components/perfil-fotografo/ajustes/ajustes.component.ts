import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss']
})
export class AjustesComponent implements OnInit {


  fotografo: Fotografo;
  formulario: FormGroup;

  idFotografo: Number;

  constructor(
    private fotografoService: FotografoService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {

    this.formulario = new FormGroup({

      nombre: new FormControl('', [

      ]),

      apellidos: new FormControl('', [


      ]),

      email: new FormControl('', [

      ]),

      telefono: new FormControl('',
        [


        ]),
      direccion: new FormControl('', [



      ]),

      password: new FormControl('', [

      ]),

      password_2: new FormControl()
    })
  }



  async ngOnInit() {



    const fotografo = await this.fotografoService.fotografoById()
    console.log('ajustes', fotografo);

    this.formulario = new FormGroup({

      nombre: new FormControl(fotografo.nombre, [

      ]),

      apellidos: new FormControl(fotografo.apellidos, [


      ]),

      email: new FormControl(fotografo.email, [

      ]),

      telefono: new FormControl(fotografo.telefono,
        [


        ]),
      direccion: new FormControl(fotografo.direccion, [
      ]),

      password: new FormControl([

      ]),

      password_2: new FormControl()
    })




  }

  async onSubmit() {

    const response = await this.fotografoService.upDateFotografo(this.formulario.value)
    console.log('fotografo-ajustes', response);

    this.router.navigate(['/fotografo'])

  }

}



