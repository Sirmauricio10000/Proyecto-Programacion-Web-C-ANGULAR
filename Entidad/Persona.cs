using System;
using System.ComponentModel.DataAnnotations;

namespace Entidad
{
    public class Persona
    {
        [Key]
        public string identificacion{get; set;}
        public string tipoIdentificacion{get; set;}
        public string nombre{get; set;}
        public string correo{get; set;}
        public string telefono{get; set;}
    }
}