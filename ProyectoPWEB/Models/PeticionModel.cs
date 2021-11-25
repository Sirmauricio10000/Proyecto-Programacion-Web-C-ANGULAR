using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entidad;

namespace ProyectoPWEB.Models
{
    public class PeticionInputModel
    {
        public int codigoPeticion {get;set;}
        public string referenciaSolicitante {get;set;}
        public string referenciaFuncionario{get;set;}
        public String contexto {get;set;}
        public DateTime fechaPeticion {get;set;}
    }

        public class PeticionViewModel:PeticionInputModel
    {
        public Usuario solicitanteEST {get;set;}
        public Usuario funcionarioEncargado {get;set;}
        public PeticionViewModel(Peticion peticion)
        {
            codigoPeticion = peticion.codigoPeticion;
            solicitanteEST = peticion.solicitanteEST;
            funcionarioEncargado = peticion.funcionarioEncargado;
            fechaPeticion = peticion.fechaPeticion;
            contexto = peticion.contexto;
        }
    }
}