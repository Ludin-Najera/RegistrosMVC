import { Component, OnInit } from '@angular/core';

import { inicio } from 'src/app/models/inicio';
import {InicioService} from '../../services/inicio.service';


@Component({
  selector: 'app-inicio-form',
  templateUrl: './inicio-form.component.html',
  styleUrls: ['./inicio-form.component.css']
})
export class InicioFormComponent implements OnInit {

  inicio: inicio = {
    IdE: 0,
    Nombre: '',
    Carrera: '',
    Carne: ''

  };

  constructor(private inicioservice: InicioService) { }

  ngOnInit(): void {
  }

  GuardarEstudiante(){
    delete this.inicio.IdE;
    
    this.inicioservice.guardarregistro(this.inicio)
    .subscribe(
      res => {
        console.log(res);
      },
      err=> console.error(err)
    )
  }

}
