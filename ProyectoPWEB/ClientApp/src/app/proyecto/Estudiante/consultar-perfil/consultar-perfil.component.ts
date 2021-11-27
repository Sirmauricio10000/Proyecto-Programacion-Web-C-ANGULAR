import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-consultar-perfil',
  templateUrl: './consultar-perfil.component.html',
  styleUrls: ['./consultar-perfil.component.css']
})
export class ConsultarPerfilComponent implements OnInit {

  usuario: Usuario;

  constructor(private usuarioService: UsuarioService, private modalService: NgbModal) { }

  ngOnInit() {
    this.usuario = new Usuario;
    //this.usuarioService.getOne(this.usuario).subscribe(p => {this.usuario = p;});
  }
}
