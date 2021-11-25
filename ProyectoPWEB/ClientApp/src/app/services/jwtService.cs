using Entidad;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ProyectoPWEB.Models;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

public class JwtService
{
    private readonly AppSetting _appSettings;
    public JwtService(IOptions<AppSetting> appSettings) => _appSettings = appSettings.Value;

    public UsuarioViewModel GenerateToken(Usuario userLogIn)
    {
        // return null if user not found
        if (userLogIn == null) return null;

        var userResponse = new UsuarioViewModel() {   
            userName = userLogIn.userName,
            userType = userLogIn.userType,
            persona = userLogIn.persona
        };
        
        // authentication successful so generate jwt token
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
                    new Claim(ClaimTypes.NameIdentifier, userLogIn.userName.ToString()),
                    new Claim(ClaimTypes.Name, userLogIn.persona.nombre.ToString()),
                    new Claim(ClaimTypes.Email, userLogIn.persona.correo.ToString()),
                    new Claim(ClaimTypes.MobilePhone, userLogIn.persona.telefono.ToString()),
                    new Claim(ClaimTypes.Role, userLogIn.userType.ToString()),
            }),
            Expires = DateTime.UtcNow.AddDays(7),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        userResponse.token = tokenHandler.WriteToken(token);
        return userResponse;
    }
}
