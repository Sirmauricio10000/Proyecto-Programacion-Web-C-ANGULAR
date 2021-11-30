import { Pipe, PipeTransform } from '@angular/core';
import { strictEqual } from 'assert';
import { $ } from 'protractor';
import { Usuario } from '../models/usuario';
@Pipe({
  name: 'pipe-filtro-nombreAdm'
})
export class PipeFiltroNombreAdmPipe implements PipeTransform {

  transform(usuarios: Usuario[], filtro2: string): any {
    if (filtro2 == null || filtro2=="") return usuarios;

    //var proyectosFiltrados= proyectos.filter(x=>x.codigoProyecto===parseInt(filtro));    aqui es por codigo
    var usuariosFiltrados = usuarios.filter(x=>x.userName.toLowerCase().indexOf(filtro2.toLowerCase())!==-1); //aqui por titulo
    return usuariosFiltrados;
    }
}
