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



  ngOnInit() {

    this.activatedRoute.params.subscribe(async params => {

      const fotografo = await this.fotografoService.fotografoById(params.fotografoId)
      console.log('ajustes', fotografo);

      this.formulario = new FormGroup({

        nombre: new FormControl(this.fotografo.nombre, [

        ]),

        apellidos: new FormControl(this.fotografo.apellidos, [


        ]),

        email: new FormControl(this.fotografo.email, [

        ]),

        // telefono: new FormControl(this.fotografo.telefono,
        //   [


        //   ]),
        direccion: new FormControl(this.fotografo.direccion, [



        ]),

        password: new FormControl([

        ]),

        password_2: new FormControl()
      })

    })


  }



  // passwordValidator(form: FormGroup) {
  //   const passwordValue = form.get('password').value;
  //   const passwordRepeatValue = form.get('password_2').value;

  //   if (passwordValue === passwordRepeatValue) {
  //     return null;
  //   } else { return { passwordValidator: true } }

  // }
  // checkValidator(controlName, validatorName) {
  //   return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;
  //   //pa que era


  // }

  async onSubmit() {
    console.log(this.formulario.value);


    this.activatedRoute.params.subscribe(async params => {
      console.log(params);


      const response = await this.fotografoService.upDateFotografo(this.formulario.value, params.fotografoId)
      console.log('fotografo-ajustes', response);

      this.router.navigate(['/fotografo', params.fotografoId])
    })






  }

}



