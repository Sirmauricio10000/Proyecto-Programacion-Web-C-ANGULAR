using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProyectoPWEB.Models;

namespace ProyectoPWEB.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PeticionController : ControllerBase
    {
        private IConfiguration _configuration;

        private readonly PeticionService peticionService;

        public PeticionController(ProyectoContext context )
        {
            peticionService = new PeticionService(context);
        }

        
        [HttpPost]
        public ActionResult<Peticion> Guardar(PeticionInputModel peticionInput)
        {
            var peticion = MapearPeticion(peticionInput);
            var respuesta = peticionService.Guardar(peticion);
            if (respuesta.Error)
            {
                return BadRequest(respuesta.Mensaje);
            }
            return Ok(peticion);
        }

        private Peticion MapearPeticion(PeticionInputModel peticionInput)
        {
            var peticion = new Peticion{
                codigoPeticion = peticionInput.codigoPeticion,
                referenciaSolicitante = peticionInput.referenciaSolicitante,
                referenciaFuncionario = peticionInput.referenciaFuncionario,
                fechaPeticion = peticionInput.fechaPeticion,
                contexto = peticionInput.contexto
            };

            return peticion;
        }

        [HttpGet]
        public IEnumerable<PeticionViewModel> Gets()
        {
            var peticiones = peticionService.ConsultarTodos().Select(p => new PeticionViewModel(p));
            return peticiones;
        }
        
    }
}