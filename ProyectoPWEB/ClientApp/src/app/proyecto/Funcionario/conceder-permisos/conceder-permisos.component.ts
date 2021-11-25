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
  usuarios: Usuario[];
  usuario: Usuario;
  
  ngOnInit() {
  }

  modificarPermisos(){
    this.usuarioService.get().subscribe(result => {
      this.usuarios = result;
    })
      this.usuarios.forEach(key => {
        if(key.identificacionUsuario==this.identificacionUsuario)
        {
          key.tipoDeUsuario = this.tipoDeUsuario;
          this.usuario = new Usuario;
          this.usuario = key;
        }
      });

      alert(JSON.stringify(this.usuario));
      this.usuarioService.put(this.usuario).subscribe(result => {
        if (result != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Permisos modificados correctamente';
        this.usuario = result;
        }
      });
  }

}
