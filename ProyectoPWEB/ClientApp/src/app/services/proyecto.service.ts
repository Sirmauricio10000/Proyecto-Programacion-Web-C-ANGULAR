import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Proyecto } from '../proyecto/models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.baseUrl + 'api/Proyecto')
      .pipe(tap(),
        catchError(this.handleErrorService.handleError<Proyecto[]>('Consulta Proyecto', null))
      );
  }

  getOne(reference: string) : Observable<Proyecto> {
    return this.http.get<Proyecto>(this.baseUrl + 'api/Proyecto/'+reference)
      .pipe(tap(),
        catchError(this.handleErrorService.handleError<Proyecto>('Consulta Proyecto', null))
      );
  }

  getByCode(reference: number) : Observable<Proyecto> {
    return this.http.get<Proyecto>(this.baseUrl + 'api/Proyecto/'+reference+"2")
      .pipe(tap(),
        catchError(this.handleErrorService.handleError<Proyecto>('Consulta Proyecto', null))
      );
  }

  post(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.baseUrl + 'api/Proyecto', proyecto)
      .pipe(tap(),
        catchError(this.handleErrorService.handleError<Proyecto>('Registrar Proyecto', null))
      );
  }

  put(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(this.baseUrl + 'api/Proyecto', proyecto)
      .pipe(tap(),
        catchError(this.handleErrorService.handleError<Proyecto>('Actualizar Proyecto', null))
      );
  }
}
