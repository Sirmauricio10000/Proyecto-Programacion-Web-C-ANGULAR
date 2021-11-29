import { Pipe, PipeTransform } from '@angular/core';
import { strictEqual } from 'assert';
import { $ } from 'protractor';
import { Usuario } from '../models/usuario';
@Pipe({
  name: 'pipe-filtro-nombreAdm'
})
export class PipeFiltroNombreAdmPipe implements PipeTransform {
 usuarioFiltrar : string = "administrador";
  transform(usuarios: Usuario[], filtro: string): any {
    if (filtro == null || filtro=="") return usuarios;

    //var proyectosFiltrados= proyectos.filter(x=>x.codigoProyecto===parseInt(filtro));    aqui es por codigo
    var usuariosFiltrados = usuarios.filter(x=>x.userName.toLowerCase().indexOf(filtro.toLowerCase())!==-1); //aqui por titulo
    var listaUsuarios = usuariosFiltrados.filter(x=>x.userType.toLowerCase().indexOf(this.usuarioFiltrar.toLowerCase())!==-1);
    return listaUsuarios
    }

}
