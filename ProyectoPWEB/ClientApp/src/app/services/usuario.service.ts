import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Usuario } from '../proyecto/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl + 'api/Usuario')
      .pipe(tap(),
        catchError(this.handleErrorService.handleError<Usuario[]>('Consulta Usuarios', null))
      );
  }

  /*getOne(userName: string) : Observable<Usuario> {
    return this.http.get<Usuario>(this.baseUrl + 'api/Usuario', userName)
      .pipe(tap(),
        catchError(this.handleErrorService.handleError<Usuario>('Consulta Usuario', null))
      );
  } */

  post(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl + 'api/Usuario', usuario)
      .pipe(tap(),
        catchError(this.handleErrorService.handleError<Usuario>('Registrar Usuario', null))
      );
  }

  put(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.baseUrl + 'api/Usuario', usuario)
      .pipe(tap(),
        catchError(this.handleErrorService.handleError<Usuario>('Actualizar Usuario', null))
      );
  }
}
