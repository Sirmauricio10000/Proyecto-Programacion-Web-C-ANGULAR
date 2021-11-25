using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entidad;

namespace Logica
{
    public class PersonaService
    {
     private readonly ProyectoContext _context;

        public PersonaService(ProyectoContext context)
        {
            _context = context;
        }
    
        public GuardarPersonaResponse Guardar(Persona persona)
        {
            try
            {
                var personaBuscada = _context.Personas.Find(persona.identificacion);
                if(personaBuscada!=null){
                    return new GuardarPersonaResponse("Error el usuario ya se encuentra registrado");
                }
                _context.Personas.Add(persona);
                _context.SaveChanges();
                return new GuardarPersonaResponse(persona);
            }
            catch (Exception e)
            {
                return new GuardarPersonaResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public List<Persona> ConsultarTodos()
        {
            List<Persona> personas = _context.Personas.ToList();;
            return personas;
        }

        public GuardarPersonaResponse Actualizar(Persona personaNueva)
        {
            try
            {
                var personaVieja = _context.Personas.Find(personaNueva.identificacion);
                if (personaVieja!=null){
                    personaVieja.identificacion = personaNueva.identificacion;
                    personaVieja.nombre = personaNueva.nombre;
                    personaVieja.tipoIdentificacion = personaNueva.tipoIdentificacion;
                    personaVieja.telefono = personaNueva.telefono;
                    personaVieja.correo = personaNueva.correo;
                    _context.Personas.Update(personaVieja);
                    _context.SaveChanges();
                    return new GuardarPersonaResponse(personaVieja);
                }
                return new GuardarPersonaResponse("Error el usuario no existe");
            }
            catch (Exception e)
            {
                return new GuardarPersonaResponse(e.Message);
            }
        }

        public class GuardarPersonaResponse
        {
            public GuardarPersonaResponse(Persona persona)
            {
                Error = false;
                Persona = persona;
            }

            public GuardarPersonaResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }

            public GuardarPersonaResponse(bool error, string mensaje, Persona persona)
            {
                this.Error = error;
                this.Mensaje = mensaje;
                this.Persona = persona;
            }

            public bool Error { get; set; }

            public string Mensaje { get; set; }

            public Persona Persona { get; set; }
        }
    }
}
