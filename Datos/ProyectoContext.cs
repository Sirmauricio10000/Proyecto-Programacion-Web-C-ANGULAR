using Entidad;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class ProyectoContext : DbContext
    {
        public ProyectoContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Proyecto> Proyectos { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Peticion> Peticiones { get; set; }
        public DbSet<Persona> Personas {get;set;}
    }
}
