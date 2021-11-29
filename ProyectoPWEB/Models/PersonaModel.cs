using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Entidad;

namespace ProyectoPWEB.Models
{
    public class PersonaInputModel
    {
        public string identificacion {get; set;}
        public string tipoIdentificacion {get; set;}
        public string nombre{get; set;}
        public string correo{get; set;}
        public string telefono{get; set;}
    }

    public class PersonaViewModel:PersonaInputModel{
        public PersonaViewModel(Persona persona)
        {
            identificacion = persona.identificacion;
            tipoIdentificacion = persona.tipoIdentificacion;
            nombre = persona.nombre;
            correo = persona.correo;
            telefono = persona.telefono;
        }

        public PersonaViewModel(){
        }
    }

    public class PersonaUpdateModel: PersonaInputModel{
    }
}