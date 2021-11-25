using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entidad;

namespace Logica
{
    public class PeticionService
    {
       private readonly ProyectoContext _context;

        public PeticionService(ProyectoContext context)
        {
            _context = context;
        }
    
        public GuardarPeticionResponse Guardar(Peticion peticion)
        {
            try
            {
                var peticionBuscada = _context.Peticiones.Find(peticion.codigoPeticion);
                if(peticionBuscada!=null){
                    return new GuardarPeticionResponse("La peticion ya se encuentra registrado");
                }
                _context.Peticiones.Add(peticion);
                _context.SaveChanges();
                return new GuardarPeticionResponse(peticion);
            }
            catch (Exception e)
            {
                return new GuardarPeticionResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public List<Peticion> ConsultarTodos()
        {
            List<Peticion> peticiones = _context.Peticiones.ToList();
            foreach (var item in peticiones){
                item.funcionarioEncargado = _context.Usuarios.Find(item.referenciaFuncionario);
                item.solicitanteEST = _context.Usuarios.Find(item.referenciaSolicitante);
            }
            return peticiones;
        }

        public class GuardarPeticionResponse
        {
            public GuardarPeticionResponse(Peticion peticion)
            {
                Error = false;
                Peticion = peticion;
            }

            public GuardarPeticionResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }

            public GuardarPeticionResponse(bool error, string mensaje,Peticion peticion)
            {
                this.Error = error;
                this.Mensaje = mensaje;
                this.Peticion = peticion;
            }

            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Peticion Peticion { get; set; }
        }
    }
}
