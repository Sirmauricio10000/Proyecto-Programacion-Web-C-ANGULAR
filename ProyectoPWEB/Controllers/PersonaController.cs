using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProyectoPWEB.Models;

namespace ProyectoPWEB.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonaController : ControllerBase
    {
        private IConfiguration _configuration;

        private readonly PersonaService personaService;

        public PersonaController(ProyectoContext context)
        {
            personaService = new PersonaService(context);
        }

        [HttpPost]
        public ActionResult<Persona> Guardar(PersonaInputModel personaInput)
        {
            var persona = MapearPersona(personaInput);
            var respuesta = personaService.Guardar(persona);
            if (respuesta.Error)
            {
                ModelState.AddModelError("Guardar Persona", respuesta.Mensaje);
                var problemDetails =
                    new ValidationProblemDetails(ModelState)
                    { Status = StatusCodes.Status400BadRequest };
                return BadRequest(problemDetails);
            }
            return Ok(persona);
        }

        private Persona MapearPersona(PersonaInputModel personaInput)
        {
            var persona =
                new Persona {
                    identificacion = personaInput.identificacion,
                    tipoIdentificacion = personaInput.tipoIdentificacion,
                    nombre = personaInput.nombre,
                    correo = personaInput.correo,
                    telefono = personaInput.telefono,
                };
            return persona;
        }

        private Persona MapearPersonaUpdate(PersonaUpdateModel personaUpdate)
        {
            var persona =
                new Persona {
                    identificacion = personaUpdate.identificacion,
                    tipoIdentificacion = personaUpdate.tipoIdentificacion,
                    nombre = personaUpdate.nombre,
                    correo = personaUpdate.correo,
                    telefono = personaUpdate.telefono,
                };
            return persona;
        }

        [HttpGet]
        public IEnumerable<PersonaViewModel> Gets()
        {
            var personas =
                personaService.ConsultarTodos().Select(p => new PersonaViewModel(p));
            return personas;
        }

        [HttpPut]
        public ActionResult<string> Put(PersonaUpdateModel personaUpdate)
        {
            Persona persona = MapearPersonaUpdate(personaUpdate);
            var response = personaService.Actualizar(persona);
            if (response.Error)
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Persona);
        }
    }
}
