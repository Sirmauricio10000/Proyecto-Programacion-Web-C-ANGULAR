using System;
using System.ComponentModel.DataAnnotations;

namespace Entidad
{
    public class Proyecto
    {
        [Key]
        public int codigoProyecto {get; set;}
        public string tituloProyecto {get; set;}
        public string referenciaInvestigadorPrincipal {get;set;}
        public Usuario investigadorPrincipal {get; set;}
        public string referenciaInvestigadorSecundario {get;set;}
        public Usuario investigadorSecundario {get;set;}
        public string grupoDeInvestigacion {get; set;}
        public string areaProyecto {get; set;}
        public string lineaDeInvestigacion {get; set;}
        public string tipoProyecto {get; set;}
        public DateTime fechaPresentacion {get; set;}
        public string linkProyecto {get; set;}
        public string estadoProyecto {get; set;}
        public string comentariosProyecto {get; set;}
        public string referenciaEvaluadorProyecto1 {get;set;}
        public Usuario evaluadorProyecto1 {get; set;}
        public string referenciaEvaluadorProyecto2 {get;set;}
        public Usuario evaluadorProyecto2 {get;set;}
    }
}
