import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';
import { Fotografo } from '../interfaces/fotografo';

@Injectable({
  providedIn: 'root'
})
export class FotografoService {

  fotografos: Fotografo[];

  baseUrl: string;
  privateUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/fotografos';
    this.privateUrl = 'http://localhost:3000/api/fotografos/private';


    this.fotografos = []
  }

  insert(formValues): Promise<any> {
    return this.httpClient.post(this.baseUrl, formValues).toPromise();
  }

  fotografoById(): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/perfil`, this.createHeaders()).toPromise();

  }
  vistaById(fotografoId): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/vista_perfil/${fotografoId}`).toPromise();
  }

  upDateFotografo(formValues) {

    return this.httpClient.put(this.privateUrl, formValues, this.createHeaders()).toPromise();
  }

  updatePasswordFotografo(formValues) {
    return this.httpClient.patch(this.privateUrl, formValues, this.createHeaders()).toPromise();
  }


  deleteFotografo(): Promise<any> {
    return this.httpClient.delete(`${this.privateUrl}`, this.createHeaders()).toPromise();

  }

  getAllFotografos(): Promise<any> {
    return this.httpClient.get(this.baseUrl).toPromise();

  }

  getByCategory(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/filter`, formValues).toPromise()
  }

  login(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/login_fotografo`, formValues).toPromise();
  }


  createImage(fd: FormData): Promise<any> {
    return this.httpClient.post(`${this.privateUrl}/upload`, fd, this.createHeaders()).toPromise();
  }

  getAllImages(): Promise<any> {
    return this.httpClient.get(`${this.privateUrl}/imagenes`, this.createHeaders()).toPromise();
  }

  getAllimagesByFotografo(fotografoId): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/vista_perfil/${fotografoId}/portfolio`).toPromise()
  }
  //metodo todas las imagenes de un fotografo 

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('token_fotografo')
      })
    }
  }

}
