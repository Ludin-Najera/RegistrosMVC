import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { inicio } from '../models/inicio';
import {cat} from '../models/cat';

@Injectable({
  providedIn: 'root'
})

export class InicioService {

  API_URI = 'http://localhost:3000/inicio';
  
  constructor (private http: HttpClient){}

  getinicio(){
    return this.http.get(`${this.API_URI}/inicio`);
  }

  getbusqueda(ide: string){
    return this.http.get(`${this.API_URI}/inicio/${ide}`);
  }

  guardarregistro( Inicio: inicio){
    return this.http.post('http://localhost:3000/inicio', Inicio);

  }

  deleteregistro(ide: String){

    return this.http.delete(`${this.API_URI}/inicio/${ide}`);
  }

  updateregistro(ide, updateregistro){
    return this.http.put(`${this.API_URI}/inicio/${ide}`, updateregistro);
  }

  

   
}

@Injectable({
  providedIn: 'root'
})

export class CatService {

  constructor (private http: HttpClient){}

  guardarregistrocat( cat: cat){
    return this.http.post('http://localhost:3000/cat', cat);

  }
}
