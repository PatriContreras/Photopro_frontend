import { Injectable } from '@angular/core';
import { Fotografo } from '../interfaces/fotografo';

@Injectable({
  providedIn: 'root'
})
export class FotografoService {

  fotografos: Fotografo[];

  constructor() {
    this.fotografos = [
      {
        nombre: 'Pedro',
        apellidos: 'Galan Martinez',
        direccion: 'Calle Atocha 43',
        email: 'pedro@gmail.com',
        password: 'holapedro'
      },
      {
        nombre: 'Ana',
        apellidos: 'Lopez Garcia',
        direccion: 'Calle princesa 5',
        email: 'ana@gmail.com',
        password: 'holaana'
      },
      {
        nombre: 'Carla',
        apellidos: 'Benito Carrera',
        direccion: 'Calle moncloa 74',
        email: 'carla@gmail.com',
        password: 'holacarla'
      },
    ]
  }


}
