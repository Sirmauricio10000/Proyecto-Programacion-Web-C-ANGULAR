import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-cancelar-inscripcion',
  templateUrl: './cancelar-inscripcion.component.html',
  styleUrls: ['./cancelar-inscripcion.component.css']
})
export class CancelarInscripcionComponent implements OnInit {

  usuario: Usuario;
  password: string;
  referencia: string;

  constructor(private usuarioService: UsuarioService, private modalService: NgbModal
    , private proyectoService: ProyectoService) { }

  ngOnInit() {
    this.usuario = new Usuario;
    this.usuario = JSON.parse(localStorage.getItem("currentUser"));
    this.referencia = this.usuario.userName;
  }

  cancelar(){
    this.usuario.password = this.password;
    this.usuarioService.getPassword(this.usuario).subscribe(result => {
        if (result!=null){
          this.proyectoService.delete(this.usuario.userName).subscribe(result =>{
            if (result!=null){
              const messageBox = this.modalService.open(AlertModalComponent)
              messageBox.componentInstance.title = "Mensaje";
              messageBox.componentInstance.message = 'El proyecto ha sido eliminado correctamente';
            }
          })
        }
    });
  }
}