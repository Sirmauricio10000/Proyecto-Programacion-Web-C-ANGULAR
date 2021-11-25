using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Entidad;

namespace ProyectoPWEB.Models
{
    public class UsuarioInputModel{
        public string userName {get;set;}
        public string userType{get; set;}
        public string password{get; set;}
        public string token {get;set;}
        public Persona persona {get;set;}
    }

    public class UsuarioViewModel:UsuarioInputModel{

        public UsuarioViewModel(Usuario usuario)
        {
            userName = usuario.userName;
            userType = usuario.userType;
            password = usuario.password;
            persona = usuario.persona;
        }

        public UsuarioViewModel(){

        }
    }

    public class UsuarioUpdateModel: UsuarioInputModel{
    } 
}