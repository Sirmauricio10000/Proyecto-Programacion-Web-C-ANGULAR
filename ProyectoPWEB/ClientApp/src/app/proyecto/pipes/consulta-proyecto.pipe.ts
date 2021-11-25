import { Pipe, PipeTransform } from '@angular/core';
import { $ } from 'protractor';
import { Proyecto } from '../models/proyecto';

@Pipe({
  name: 'ProyectoPipe'
})
export class ConsultaProyectoPipe implements PipeTransform {

  transform(proyectos: Proyecto[], filtro: string): any {
    if (filtro == null || filtro=="") return proyectos;

    //var proyectosFiltrados= proyectos.filter(x=>x.codigoProyecto===parseInt(filtro));    aqui es por codigo
    var proyectosFiltrados = proyectos.filter(x=>x.tituloProyecto.toLowerCase().indexOf(filtro.toLowerCase())!==-1); //aqui por titulo
     return proyectosFiltrados
    }
}