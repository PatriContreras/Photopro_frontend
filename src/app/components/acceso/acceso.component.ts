import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';
import { UsuarioService } from 'src/app/servicios/usuario.service'

declare var Swal;

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss']
})
export class AccesoComponent implements OnInit {

  fotografo: Fotografo;
  fotografoId: number;
  formulario: FormGroup;
  errorMessage: string;


  constructor(private fotografoService: FotografoService,
    private clienteService: UsuarioService,

    private router: Router,
  ) {

    this.formulario = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/)
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/)
      ]),
      registro: new FormControl('', [

      ]),



    });
  }

  async ngOnInit() {


    /* const fotografo = await this.fotografoService.fotografoById() */




  }

  onSubmit() {

    if (this.formulario.value.registro === 'opcionFotografo') {

      console.log(this.formulario.value.registro)
      // this.errorMessage = null; // Para tener sensación de usuario de que está pulsando el botón
      this.fotografoService.login(this.formulario.value)
        .then(response => {
          if (response.error) {
            setTimeout(() => this.errorMessage = 'Mensaje de error', 300)
          } else {
            localStorage.setItem('token_fotografo', response.token);
            Swal.fire(
              'Login Correcto!',
              'Acceso permitido!',
              'success')
              .then(result => {
                this.router.navigate(['/fotografo']);
              });
            this.errorMessage = null;
          }
        })
        .catch(error => {
          console.log(error);
        })
    } else {

      this.clienteService.login(this.formulario.value)
        .then(response => {
          if (response.error) {
            setTimeout(() => this.errorMessage = 'Mensaje de error', 300)
          } else {
            localStorage.setItem('token_cliente', response.token);
            Swal.fire(
              'Login Correcto!',
              'Acceso permitido!',
              'success')
              .then(result => {
                this.router.navigate(['/cliente/perfil']);
              });
            this.errorMessage = null;
          }
        })
        .catch(error => {
          console.log(error);
        })

    }
  }

}
