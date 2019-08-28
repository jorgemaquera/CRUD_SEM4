import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:9876/categorias/';
  
  getCategorias(){
    return this.http.get<Object[]>(this.Url);
  }
  createCategorias(nombre: String){
    return this.http.post<String>(this.Url, nombre);
  }
}
