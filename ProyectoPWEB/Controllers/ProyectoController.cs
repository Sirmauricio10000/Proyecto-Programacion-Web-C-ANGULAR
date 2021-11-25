using System;
using System.Collections;
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
    public class ProyectoController : ControllerBase
    {
        private IConfiguration _configuration;

        private readonly ProyectoService proyectoService;

        public ProyectoController(ProyectoContext context)
        {
            proyectoService = new ProyectoService(context);
        }

        [HttpPost]
        public ActionResult<Proyecto> Guardar(ProyectoInputModel proyectoInput)
        {
            var proyecto = MapearProyecto(proyectoInput);
            var respuesta = proyectoService.Guardar(proyecto);
            if (respuesta.Error)
            {
                ModelState.AddModelError("Guardar Persona", respuesta.Mensaje);
                var problemDetails =
                    new ValidationProblemDetails(ModelState)
                    { Status = StatusCodes.Status400BadRequest };
                return BadRequest(problemDetails);
            }
            return Ok(proyecto);
        }

        private Proyecto MapearProyecto(ProyectoInputModel proyectoInput)
        {
            var proyecto =
                new Proyecto {
                    tituloProyecto = proyectoInput.tituloProyecto,
                    referenciaInvestigadorPrincipal = proyectoInput.referenciaInvestigadorPrincipal,
                    referenciaInvestigadorSecundario = proyectoInput.referenciaInvestigadorSecundario,
                    grupoDeInvestigacion = proyectoInput.grupoDeInvestigacion,
                    areaProyecto = proyectoInput.areaProyecto,
                    lineaDeInvestigacion = proyectoInput.lineaDeInvestigacion,
                    tipoProyecto = proyectoInput.tipoProyecto,
                    fechaPresentacion = proyectoInput.fechaPresentacion,
                    linkProyecto = proyectoInput.linkProyecto,
                    estadoProyecto = proyectoInput.estadoProyecto,
                    comentariosProyecto = proyectoInput.comentariosProyecto,
                    referenciaEvaluadorProyecto1 = proyectoInput.referenciaEvaluadorProyecto1,
                    referenciaEvaluadorProyecto2 = proyectoInput.referenciaEvaluadorProyecto2
                };
            return proyecto;
        }

        [HttpGet]
        public IEnumerable<ProyectoViewModel> Gets()
        {
            var proyectos = proyectoService.ConsultarTodos();
            if (proyectos != null)
            {
                return MapearProyectoView(proyectos);
            }
            return new List<ProyectoViewModel>();
        }

        [HttpPut]
        public ActionResult<string> Put(ProyectoUpdateModel proyectoUpdate)
        {
            Proyecto proyecto = MapearProyectoUpdate(proyectoUpdate);
            var response = proyectoService.Actualizar(proyecto);
            if (response.Error)
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Proyecto);
        }

        private Proyecto MapearProyectoUpdate(ProyectoUpdateModel proyectoInput)
        {
            var proyecto =
                new Proyecto {
                    codigoProyecto = proyectoInput.codigoProyecto,
                    tituloProyecto = proyectoInput.tituloProyecto,
                    referenciaInvestigadorPrincipal = proyectoInput.referenciaInvestigadorPrincipal,
                    referenciaInvestigadorSecundario = proyectoInput.referenciaInvestigadorSecundario,
                    grupoDeInvestigacion = proyectoInput.grupoDeInvestigacion,
                    areaProyecto = proyectoInput.areaProyecto,
                    lineaDeInvestigacion = proyectoInput.lineaDeInvestigacion,
                    tipoProyecto = proyectoInput.tipoProyecto,
                    fechaPresentacion = proyectoInput.fechaPresentacion,
                    linkProyecto = proyectoInput.linkProyecto,
                    estadoProyecto = proyectoInput.estadoProyecto,
                    comentariosProyecto = proyectoInput.comentariosProyecto,
                    referenciaEvaluadorProyecto1 = proyectoInput.referenciaEvaluadorProyecto1,
                    referenciaEvaluadorProyecto2 = proyectoInput.referenciaEvaluadorProyecto2
                };
            return proyecto;
        }

        private IEnumerable<ProyectoViewModel> MapearProyectoView(List<Proyecto> proyectos)
        {
            List<ProyectoViewModel> proyectosConsultados =
                new List<ProyectoViewModel>();
            foreach (var item in proyectos)
            {
                ProyectoViewModel proyecto = new ProyectoViewModel();
                proyecto.codigoProyecto = item.codigoProyecto;
                proyecto.referenciaInvestigadorPrincipal = item.referenciaInvestigadorPrincipal;
                proyecto.investigadorPrincipal = item.investigadorPrincipal;
                proyecto.referenciaInvestigadorSecundario = item.referenciaInvestigadorSecundario;
                proyecto.investigadorSecundario = item.investigadorSecundario;
                proyecto.tituloProyecto = item.tituloProyecto;
                proyecto.grupoDeInvestigacion = item.grupoDeInvestigacion;
                proyecto.areaProyecto = item.areaProyecto;
                proyecto.lineaDeInvestigacion = item.lineaDeInvestigacion;
                proyecto.tipoProyecto = item.tipoProyecto;
                proyecto.fechaPresentacion = item.fechaPresentacion;
                proyecto.linkProyecto = item.linkProyecto;
                proyecto.estadoProyecto = item.estadoProyecto;
                proyecto.comentariosProyecto = item.comentariosProyecto;
                proyecto.referenciaEvaluadorProyecto1 = item.referenciaEvaluadorProyecto1;
                proyecto.evaluadorProyecto1 = item.evaluadorProyecto1;
                proyecto.referenciaEvaluadorProyecto2 = item.referenciaEvaluadorProyecto2;
                proyecto.evaluadorProyecto2 = item.evaluadorProyecto2;
                proyectosConsultados.Add (proyecto);
            }
            return proyectosConsultados;
        }
    }
}
