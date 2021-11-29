using System;
using Datos;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using ProyectoPWEB.Models;

namespace ProyectoPWEB.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        ProyectoContext _context;
        UsuarioService usuarioService;
        JwtService jwtService;

        public LoginController(ProyectoContext context, IOptions<AppSetting> appSettings)
        {
            _context = context;
            var admin = _context.Usuarios.Find("admin");
            if (admin == null)
            {
                _context.Usuarios.Add(new Usuario()
                {
                    userName = "admin",
                    password = "admin",
                    userType = "administrador",
                }
                );
                var registrosGuardados = _context.SaveChanges();
            }
            usuarioService = new UsuarioService(context);
            jwtService = new JwtService(appSettings);
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody]LoginInputModel model)
        {
            var usuario = usuarioService.ValidarLogin(model.userName, model.password);
            if (usuario == null) {
                ModelState.AddModelError("Error al ingresar", "Usuario o Contraseña incorrectos");
                var problemDetails = new ValidationProblemDetails(ModelState){ 
                    Status = StatusCodes.Status400BadRequest
                };
                return BadRequest(problemDetails);
            }
            var response = jwtService.GenerateToken(usuario);
            return Ok(response);
        }
    }
}