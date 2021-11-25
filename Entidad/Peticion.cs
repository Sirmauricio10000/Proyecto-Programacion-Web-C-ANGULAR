using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Entidad
{
    public class Peticion
    {
        [Key]
        public int codigoPeticion {get;set;}
        public String referenciaSolicitante {get;set;}
        public Usuario solicitanteEST {get;set;}
        public String referenciaFuncionario {get;set;}
        public Usuario funcionarioEncargado {get;set;}
        public String contexto {get;set;}
        public DateTime fechaPeticion {get;set;}
    }
}