import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-consulta-proyecto',
  templateUrl: './consulta-proyecto.component.html',
  styleUrls: ['./consulta-proyecto.component.css']
})
export class ConsultaProyectoComponent implements OnInit {

  verBusqueda: boolean = false;
  verTablas: boolean = true;

  constructor(private proyectoService: ProyectoService) { }

  proyectos: Proyecto[];
  filtro: string;

  ngOnInit() {
    this.proyectoService.get().subscribe(result => {this.proyectos = result;});
  }

  filtroAvanzado() {
    this.verBusqueda = !this.verBusqueda;
    this.verTablas = !this.verTablas;
  }

  limparBusqueda(){
    this.filtro="";
  }
}
