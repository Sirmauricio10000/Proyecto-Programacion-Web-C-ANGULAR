using System;
using System.ComponentModel.DataAnnotations;

namespace Entidad
{
    public class Usuario
    {
        [Key]
        public string userName{get; set;}
        public string userType{get; set;}
        public string password{get; set;}
        public Persona persona {get;set;}
    }
}


