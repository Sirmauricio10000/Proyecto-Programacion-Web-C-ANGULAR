using System.ComponentModel.DataAnnotations;
using Entidad;

namespace ProyectoPWEB.Models
{
    public class PersonaInputModel
    {
        [Required(ErrorMessage = "La identificacion es requerida")]
        public string identificacion {get; set;}

        [Required(ErrorMessage = "El tipo de identificacion es requerido")]
        public string tipoIdentificacion {get; set;}

        [Required(ErrorMessage = "El nombre es requerido")]
        public string nombre{get; set;}

        [Required(ErrorMessage = "El correo es requerido")]
        public string correo{get; set;}

        [Required(ErrorMessage = "El telefono es requerido")]
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