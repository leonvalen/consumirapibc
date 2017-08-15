import { Component, OnInit } from '@angular/core';
import { SerIndicadoresService } from '../services/ser-indicadores.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css'],
  providers: [SerIndicadoresService]
})
export class IndicadoresComponent implements OnInit {

  resultado: any;
  constructor(private servicio:SerIndicadoresService) { }

  public formato: string = "dd-MM-yyyy";
  ngOnInit() {
    
    this.servicio.getindicador().subscribe(result => {
     if (result) {
       this.resultado = JSON.parse(result._body);

       console.log('hola', this.resultado);
     }
    });
  }
}
