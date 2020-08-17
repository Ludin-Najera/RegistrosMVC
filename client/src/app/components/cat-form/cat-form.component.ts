import { Component, OnInit } from '@angular/core';

import { cat } from 'src/app/models/cat';
import {CatService} from '../../services/inicio.service';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class catFormComponent implements OnInit {

  cat: cat = {
    IdE: 0,
    Nombre: '',
    Telefono: '',
    Correo: ''

  };

  constructor(private catservice: CatService) { }

  ngOnInit(): void {
  }

  GuardarCatedratico(){
    delete this.cat.IdE;
    
    this.catservice.guardarregistrocat(this.cat)
    .subscribe(
      res => {
        console.log(res);
      },
      err=> console.error(err)
    )
  }

}

