import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs/operators'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup

  constructor() {

    this.formulario = new FormGroup({

      nombre: new FormControl('', [
        Validators.required
      ]),

      apellidos: new FormControl('', [

        Validators.required
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/)
      ]),

      telefono: new FormControl('',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20)

        ]),

      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/)
      ]),

      password_2: new FormControl()
    }, [this.passwordValidator])
  }



  ngOnInit(): void {

    const emailControl = this.formulario.get('email');

    emailControl.valueChanges.pipe(debounceTime(2000)).subscribe((value) => {
      console.log(value)
    })
  }



  passwordValidator(form: FormGroup) {
    const passwordValue = form.get('password').value;
    const passwordRepeatValue = form.get('password_2').value;

    if (passwordValue === passwordRepeatValue) {
      return null;
    } else { return { passwordValidator: true } }

  }
  checkValidator(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;
    //pa que era


  }

  onSubmit() {
    console.log(this.formulario.value)
  }

}
