import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Fotografo } from 'src/app/interfaces/fotografo';
import { FotografoService } from 'src/app/servicios/fotografo.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  fotografo: Fotografo;
  formulario: FormGroup;

  constructor(
    private clienteService: UsuarioService,
    private fotografoService: FotografoService,
    private router: Router
  ) {
    this.formulario = new FormGroup({

      password: new FormControl('', [

      ]),

      password_2: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  async onSubmit() {

    if (localStorage.getItem('token_fotografo')) {
      const resultFotografo = await this.fotografoService.updatePasswordFotografo(this.formulario.value);
      this.router.navigate(['/fotografo'])
      console.log(resultFotografo);
    } else {
      const resultCliente = await this.clienteService.updatePasswordCliente(this.formulario.value);
      this.router.navigate(['/cliente'])
      console.log(resultCliente);

    }

  }

}
