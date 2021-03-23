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
    this.privateUrl = 'http://localhost:3000/api/fotografos/private'


    this.fotografos = []
  }

  insert(formValues): Promise<any> {
    return this.httpClient.post(this.baseUrl, formValues).toPromise();
  }

  fotografoById(pId): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${pId}`).toPromise();

  }

  upDateFotografo(formValues, pId) {
    formValues.id = pId;
    return this.httpClient.put(this.privateUrl, formValues, this.createHeaders()).toPromise();
  }

  deleteFotografo(pId): Promise<any> {
    return this.httpClient.delete(`${this.privateUrl}/${pId}`, this.createHeaders()).toPromise();

  }

  getAllFotografos(): Promise<any> {
    return this.httpClient.get(this.baseUrl).toPromise();

  }

  login(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/login_fotografo`, formValues).toPromise();
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('token_fotografo')
      })
    }
  }

}
