using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Entidad;

namespace ProyectoPWEB.Models
{
    public class ProyectoInputModel
    {
        [Required(ErrorMessage = "El titulo del proyecto es requerido"), MaxLength(30), MinLength(5)]
        public string tituloProyecto {get; set;}
        [Required(ErrorMessage = "La identificacion del investigador principal es requerida"), MaxLength(30), MinLength(5)]
        public string referenciaInvestigadorPrincipal {get;set;}
        [Required(ErrorMessage = "La identificacion del investigador secundario es requerida"), MaxLength(30), MinLength(5)]
        public string referenciaInvestigadorSecundario {get;set;}
        [Required(ErrorMessage = "El grupo de investigacion es requerido")]
        public string grupoDeInvestigacion {get; set;}
        [Required(ErrorMessage = "El area del proyecto es requerida")]
        public string areaProyecto {get; set;}
        [Required(ErrorMessage = "La linea de investigacion es requerida"), 
        MaxLength(30, ErrorMessage = "La linea de investigacion puede tener maximo 30 caracteres" ), 
        MinLength(5, ErrorMessage = "La linea de investigacion debe tener minimo 5 caracteres")]
        public string lineaDeInvestigacion {get; set;}
        [Required(ErrorMessage = "El tipo de proyecto es requerido")]
        public string tipoProyecto {get; set;}
        public DateTime fechaPresentacion {get; set;}
        [Required(ErrorMessage = "El link del proyecto es requerido"), MaxLength(30), MinLength(5)]
        public string linkProyecto {get; set;}
        public string estadoProyecto {get; set;}
        public string comentariosProyecto {get; set;}
        public string referenciaEvaluadorProyecto1 {get;set;}
        public string referenciaEvaluadorProyecto2 {get;set;}
    }

        public class ProyectoViewModel : ProyectoInputModel
    {
        public int codigoProyecto {get; set;}
        public Usuario investigadorSecundario {get;set;}
        public Usuario investigadorPrincipal {get;set;}
        public Usuario evaluadorProyecto1 {get;set;}
        public Usuario evaluadorProyecto2 {get;set;}

        public ProyectoViewModel(Proyecto proyecto)
        {
            codigoProyecto = proyecto.codigoProyecto;
            tituloProyecto = proyecto.tituloProyecto;
            referenciaInvestigadorSecundario = proyecto.referenciaInvestigadorSecundario;
            investigadorSecundario = proyecto.investigadorSecundario;
            referenciaInvestigadorPrincipal = proyecto.referenciaInvestigadorPrincipal;
            investigadorPrincipal = proyecto.investigadorPrincipal;
            grupoDeInvestigacion = proyecto.grupoDeInvestigacion;
            areaProyecto = proyecto.areaProyecto;
            lineaDeInvestigacion = proyecto.lineaDeInvestigacion;
            tipoProyecto = proyecto.tipoProyecto;
            fechaPresentacion = proyecto.fechaPresentacion;
            linkProyecto = proyecto.linkProyecto;
            estadoProyecto = proyecto.estadoProyecto;
            comentariosProyecto = proyecto.comentariosProyecto;
            referenciaEvaluadorProyecto1 = proyecto.referenciaEvaluadorProyecto1;
            evaluadorProyecto1 = proyecto.evaluadorProyecto1;
            referenciaEvaluadorProyecto2 = proyecto.referenciaEvaluadorProyecto2;
            evaluadorProyecto2 = proyecto.evaluadorProyecto2;
        }

        public ProyectoViewModel()
        {
        }
    }

    public class ProyectoUpdateModel: ProyectoInputModel
    {
        [Required(ErrorMessage = "El codigo del proyecto es requerido")]
        public int codigoProyecto {get; set;}
    }

}