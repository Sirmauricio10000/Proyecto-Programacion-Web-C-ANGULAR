using Entidad;

namespace ProyectoPWEB.Models
{
    public class LoginInputModel{

        public string userName {get;set;}
        public string password {get;set;}
        public LoginInputModel(string userName, string password){
            this.userName = userName;
            this.password = password;
        }
    }

    public class LoginViewModel{
        public string userName {get;set;}
        public string userType {get;set;}
        public string token {get;set;}
        public Persona persona{get;set;}

        public LoginViewModel(Usuario usuario)
        {
            userName = usuario.userName;
            userType = usuario.userType;
            persona = usuario.persona;
        }

        public LoginViewModel(){
            
        }
    }   
}