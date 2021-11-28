using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entidad;

namespace Logica
{
    public class UsuarioService
    {
    private readonly ProyectoContext _context;

        public UsuarioService(ProyectoContext context)
        {
            _context = context;
        }
    
        public GuardarUsuarioResponse Guardar(Usuario usuario, string validatePass)
        {
            try
            {
                if (usuario.password != validatePass){
                    return new GuardarUsuarioResponse("Error, las contraseñas no coinciden");
                }
                var usuarioBuscado = _context.Usuarios.Find(usuario.userName);
                if(usuarioBuscado!=null){
                    return new GuardarUsuarioResponse("Error, el usuario ya se encuentra registrado");
                }
                _context.Usuarios.Add(usuario);
                _context.SaveChanges();
                return new GuardarUsuarioResponse(usuario);
            }
            catch (Exception e)
            {
                return new GuardarUsuarioResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public List<Usuario> ConsultarTodos()
        {
            List<Usuario> usuarios = _context.Usuarios.ToList();
            foreach(var item in usuarios){
                item.persona = _context.Personas.Find(item.userName);
            }
            return usuarios;
        }

        public GuardarUsuarioResponse Actualizar(Usuario usuarioNuevo)
        {
            try
            {
                var usuarioViejo = _context.Personas.Find(usuarioNuevo.userName);
                if (usuarioViejo!=null){
                    usuarioViejo = usuarioNuevo.persona;
                    _context.Personas.Update(usuarioViejo);
                    _context.SaveChanges();
                    usuarioNuevo.persona = usuarioViejo;
                    return new GuardarUsuarioResponse(usuarioNuevo);
                }
                return new GuardarUsuarioResponse("Error el usuario no existe");
            }
            catch (Exception e)
            {
                return new GuardarUsuarioResponse(e.Message);
            }
        }

        public Usuario ValidarLogin(string userName, string password) 
        {
            var usuario = _context.Usuarios.Find(userName);
            if (usuario!= null){
                if(usuario.password.Equals(password)){
                    usuario.persona = _context.Personas.Find(usuario.userName);
                    return usuario;
                }
            }
            return null;
        }

        public GuardarUsuarioResponse ConsultarOne(string userName){
            var usuario = _context.Usuarios.Find(userName);
            usuario.persona = _context.Personas.Find(userName);
            if (usuario==null){
                return new GuardarUsuarioResponse("Usuario no encontrado");
            }
            return new GuardarUsuarioResponse(usuario);
        }


        public class GuardarUsuarioResponse
        {
            public GuardarUsuarioResponse(Usuario usuario)
            {
                Error = false;
                Usuario = usuario;
            }

            public GuardarUsuarioResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }

            public GuardarUsuarioResponse(bool error,string mensaje,Usuario usuario)
            {
                this.Error = error;
                this.Mensaje = mensaje;
                this.Usuario = usuario;
            }

            public bool Error { get; set; }

            public string Mensaje { get; set; }

            public Usuario Usuario { get; set; }
        }
    }
}
