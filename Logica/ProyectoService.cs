﻿using System.Diagnostics;
using System;
using System.Collections.Generic;
using Datos;
using Entidad;
using System.Linq;


namespace Logica
{
    public class ProyectoService
    {

        private readonly ProyectoContext _context;

        public ProyectoService(ProyectoContext context)
        {
            _context = context;
        }
    
        public GuardarProyectoResponse Guardar(Proyecto proyecto)
        {
            try
            {
                var idBuscada1 = _context.Usuarios.Find(proyecto.referenciaInvestigadorPrincipal);
                var idBuscada2 = _context.Usuarios.Find(proyecto.referenciaInvestigadorSecundario);

                if (idBuscada1 == null){
                     return new GuardarProyectoResponse("Error: La identificacion " + proyecto.referenciaInvestigadorPrincipal + " NO existe");
                }
                if (idBuscada2 == null){
                     return new GuardarProyectoResponse("Error: La identificacion " + proyecto.referenciaInvestigadorSecundario + " NO existe");
                }
                if (proyecto.referenciaInvestigadorPrincipal == proyecto.referenciaInvestigadorSecundario) {
                    return new GuardarProyectoResponse("Error el investigador principal y secundario no pueden ser el mismo.");
                }
                proyecto.investigadorPrincipal = _context.Usuarios.Find(proyecto.referenciaInvestigadorPrincipal);
                proyecto.investigadorSecundario = _context.Usuarios.Find(proyecto.referenciaInvestigadorSecundario);
                _context.Proyectos.Add(proyecto);
                _context.SaveChanges();
                return new GuardarProyectoResponse(proyecto);
            }
            catch (Exception e)
            {
                return new GuardarProyectoResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public List<Proyecto> ConsultarTodos()
        {
            List<Proyecto> proyectos = _context.Proyectos.ToList();
            foreach (var item in proyectos)
            {
                item.investigadorPrincipal = _context.Usuarios.Find(item.referenciaInvestigadorPrincipal);
                item.investigadorSecundario = _context.Usuarios.Find(item.referenciaInvestigadorSecundario);
                item.evaluadorProyecto1 = _context.Usuarios.Find(item.referenciaEvaluadorProyecto1);
                item.evaluadorProyecto2 = _context.Usuarios.Find(item.referenciaEvaluadorProyecto2);
            }
            return proyectos;
        }

         public GuardarProyectoResponse Actualizar(Proyecto proyectoNuevo)
        {
            try
            {
                var proyectoViejo = _context.Proyectos.Find(proyectoNuevo.codigoProyecto);
                if (proyectoViejo!=null){
                    proyectoViejo.codigoProyecto = proyectoNuevo.codigoProyecto;
                    proyectoViejo.tituloProyecto = proyectoNuevo.tituloProyecto;
                    proyectoViejo.referenciaInvestigadorPrincipal = proyectoNuevo.referenciaInvestigadorPrincipal;
                    proyectoViejo.referenciaInvestigadorSecundario = proyectoNuevo.referenciaInvestigadorSecundario;
                    proyectoViejo.areaProyecto = proyectoNuevo.areaProyecto;
                    proyectoViejo.lineaDeInvestigacion = proyectoNuevo.lineaDeInvestigacion;
                    proyectoViejo.tipoProyecto = proyectoNuevo.tipoProyecto;
                    proyectoViejo.fechaPresentacion = proyectoNuevo.fechaPresentacion;
                    proyectoViejo.linkProyecto = proyectoNuevo.linkProyecto;
                    proyectoViejo.estadoProyecto = proyectoNuevo.estadoProyecto;
                    proyectoViejo.comentariosProyecto = proyectoNuevo.comentariosProyecto;
                    proyectoViejo.referenciaEvaluadorProyecto1 = proyectoNuevo.referenciaEvaluadorProyecto1;
                    proyectoViejo.referenciaEvaluadorProyecto2 = proyectoNuevo.referenciaEvaluadorProyecto2;

                    proyectoViejo.investigadorPrincipal = _context.Usuarios.Find(proyectoViejo.referenciaInvestigadorPrincipal);
                    proyectoViejo.investigadorSecundario = _context.Usuarios.Find(proyectoViejo.referenciaInvestigadorSecundario);
                    proyectoViejo.evaluadorProyecto1 = _context.Usuarios.Find(proyectoViejo.referenciaEvaluadorProyecto1);
                    proyectoViejo.evaluadorProyecto2 = _context.Usuarios.Find(proyectoViejo.referenciaEvaluadorProyecto2);
                    _context.Proyectos.Update(proyectoViejo);
                    _context.SaveChanges();
                    return new GuardarProyectoResponse(proyectoViejo);
                }
                return new GuardarProyectoResponse("Error el proyecto no existe");
            }
            catch (Exception e)
            {
                return new GuardarProyectoResponse(e.Message);
            }
        }

        public class GuardarProyectoResponse
        {
            public GuardarProyectoResponse(Proyecto proyecto)
            {
                Error = false;
                Proyecto = proyecto;
            }

            public GuardarProyectoResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }

            public GuardarProyectoResponse(
                bool error,
                string mensaje,
                Proyecto proyecto
            )
            {
                this.Error = error;
                this.Mensaje = mensaje;
                this.Proyecto = proyecto;
            }

            public bool Error { get; set; }

            public string Mensaje { get; set; }

            public Proyecto Proyecto { get; set; }
        }
    }
}
