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
        [Required, MinLength(4)]
        public string identificacion {get; set;}
        [Required, MinLength(4)]
        public string tipoIdentificacion {get; set;}
        [Required, MinLength(4)]
        public string nombre{get; set;}
        [Required, MinLength(4)]
        public string correo{get; set;}
        [Required, MinLength(4)]
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