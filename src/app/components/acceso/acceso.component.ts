import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FotografoService } from 'src/app/servicios/fotografo.service';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss']
})
export class AccesoComponent implements OnInit {

  formulario: FormGroup;
  errorMessage: string;

  constructor(private fotografoService: FotografoService) {

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
  }

  onSubmit() {


    //navigate
  }

}
