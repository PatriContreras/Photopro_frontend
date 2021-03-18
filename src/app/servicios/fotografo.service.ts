import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';
import { Fotografo } from '../interfaces/fotografo';

@Injectable({
  providedIn: 'root'
})
export class FotografoService {

  fotografos: Fotografo[];

  baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/fotografos';

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

  insert(formValues): Promise<any> {
    return this.httpClient.post(this.baseUrl, formValues).toPromise();
  }

  fotografoById(pId): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${pId}`).toPromise()

  }

  upDateFotografo(formValues, pId) {
    formValues.id = pId;
    return this.httpClient.put(this.baseUrl, formValues).toPromise();
  }


}
