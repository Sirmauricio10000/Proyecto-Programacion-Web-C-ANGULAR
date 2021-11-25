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
}