import { Component, OnInit } from '@angular/core';
import { InicioService } from '../../services/inicio.service';
@Component({
  selector: 'app-inicio-list',
  templateUrl: './inicio-list.component.html',
  styleUrls: ['./inicio-list.component.css']
})
export class InicioListComponent implements OnInit {

  inicio: any = [];

  constructor(private inioService: InicioService) { }

  ngOnInit() {
    this.inioService.getinicio().subscribe(
      res => {
       this.inicio = res; 
      },
      err => console.error(err)
    );
  }

}
