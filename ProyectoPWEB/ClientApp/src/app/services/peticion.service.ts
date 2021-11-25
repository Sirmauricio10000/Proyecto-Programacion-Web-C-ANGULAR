import { Injectable } from '@angular/core';
import { Peticion } from '../proyecto/models/peticion';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  constructor() { }

  consultaPeticiones(): Peticion[] {
    return JSON.parse(localStorage.getItem('peticiones'));
  }
  
  envioPeticiones(peticion: Peticion) {
    let peticiones: Peticion[] = [];
    if (this.consultaPeticiones() != null) {
      peticiones = this.consultaPeticiones();
    }
    peticiones.push(peticion);
    localStorage.setItem('peticiones', JSON.stringify(peticiones));
  }
}
