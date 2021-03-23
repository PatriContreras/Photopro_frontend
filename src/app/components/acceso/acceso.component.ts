import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';

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
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.formulario = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/)
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/)
      ])
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      console.log(params); // null

      const fotografo = await this.fotografoService.fotografoById(params.fotografoId)

      this.fotografo = params.fotografoId
    })

  }

  onSubmit() {
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
              this.router.navigate(['/fotografo', response.id]);
            });
          this.errorMessage = null;
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

}
