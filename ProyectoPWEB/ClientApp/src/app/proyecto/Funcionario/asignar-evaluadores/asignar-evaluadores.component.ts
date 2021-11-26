import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-asignar-evaluadores',
  templateUrl: './asignar-evaluadores.component.html',
  styleUrls: ['./asignar-evaluadores.component.css']
})
export class AsignarEvaluadoresComponent implements OnInit {

  constructor(private proyectoService: ProyectoService) { }

  codigoProyectoEvaluar: number;
  idEvaluador1: string;
  idEvaluador2: string;
  proyectos: Proyecto[];
  proyecto: Proyecto;
  filtro: string;

  ngOnInit() {
    this.proyectoService.get().subscribe(result => {this.proyectos = result;});
  }

  registrarEvaluador(){
    this.proyectoService.get().subscribe(result => {this.proyectos = result;});

    this.proyectos.forEach(key => {
      if(key.codigoProyecto==this.codigoProyectoEvaluar)
      {
        key.referenciaEvaluadorProyecto1 = this.idEvaluador1;
        key.referenciaEvaluadorProyecto2 = this.idEvaluador2;
        key.referenciaInvestigadorPrincipal = key.investigadorPrincipal.userName;
        key.referenciaInvestigadorSecundario = key.investigadorSecundario.userName;
        this.proyecto = new Proyecto;
        this.proyecto = key;
      }
    });

    alert(JSON.stringify(this.proyecto));

    this.proyectoService.put(this.proyecto).subscribe(p => {
      if (p != null) {
      this.proyecto = p;
      }
    });
  }



}
