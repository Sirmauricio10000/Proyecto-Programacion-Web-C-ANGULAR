using System;
using Datos;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using ProyectoPWEB.Models;

namespace ProyectoPWEB.Controllers
{
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
            var user = usuarioService.ValidarLogin(model.userName, model.password);
            if (user == null) return BadRequest("Username or password is incorrect");
            var response = jwtService.GenerateToken(user);
            return Ok(response);
        }
    }
}