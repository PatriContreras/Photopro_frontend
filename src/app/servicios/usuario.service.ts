import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  clientes: Cliente[];
  baseUrl: string;
  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/clientes';

    this.clientes = []

  }


  create(formValues): Promise<any> {
    return this.httpClient.post(this.baseUrl, formValues).toPromise();
  }

  clienteById(pId): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${pId}`).toPromise()

  }

  upDateCliente(formValues, pId) {
    formValues.id = pId;
    return this.httpClient.put(this.baseUrl, formValues).toPromise();
  }


}
