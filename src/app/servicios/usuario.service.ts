import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  clientes: Cliente[];

  constructor() {
    this.clientes = [
      {
        nombre: 'Carmen',
        apellidos: 'Perales Haro',
        direccion: 'Calle costa rica 58',
        email: 'carmen@gmail.com',
        password: 'holacarmen'
      },
      {
        nombre: 'Alvaro',
        apellidos: 'Gomez Carrasco',
        direccion: 'Calle Alberto Alcocer 2',
        email: 'alvaro@gmail.com',
        password: 'holaalvaro'
      },
      {
        nombre: 'Antonio',
        apellidos: 'Hernandez Rey',
        direccion: 'Calle hermosilla 7',
        email: 'antonio@gmail.com',
        password: 'holaantonio'
      },
    ]
  }
}
