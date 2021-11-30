import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-conceder-permisos',
  templateUrl: './conceder-permisos.component.html',
  styleUrls: ['./conceder-permisos.component.css']
})
export class ConcederPermisosComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private modalService: NgbModal) { }

  tipoDeUsuario: string;
  identificacionUsuario: string;
  usuario: Usuario;
  
  ngOnInit() {
    this.usuario = new Usuario;
  }

  modificarPermisos(){
    this.usuarioService.getOne(this.identificacionUsuario).subscribe(result =>{
      this.usuario = result
      this.usuario.userType = this.tipoDeUsuario;

      this.usuarioService.put(this.usuario).subscribe(result => {
        if (result != null) {
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Permisos modificados correctamente';
          this.usuario = result;
        }
      });
    });
  }

}
