import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent implements OnInit {

  formulario: FormGroup;
  cliente: Cliente;

  constructor(
    private usuarioService: UsuarioService,
    private route: Router,
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


  ngOnInit(): void {



  }
  async onSubmit() {
    console.log(this.formulario.value);


    this.activatedRoute.params.subscribe(async params => {
      console.log(params);


      const response = await this.usuarioService.upDateCliente(this.formulario.value, params.clienteId)
      console.log(response);

    })


    // this.router.navigate(['/fotografo', response.insertId])



  }


}


