using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using DatingApp.API.Data;


namespace DatingApp.API.Controllers
{
[AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
         private readonly IConfiguration _config;
        // private readonly IMapper _mapper;
        // private readonly UserManager<User> _userManager;
        // private readonly SignInManager<User> _signInManager;

        // public AuthController(IConfiguration config,
        //     IMapper mapper,
        //     UserManager<User> userManager,
        //     SignInManager<User> signInManager)
        // {
        //     _userManager = userManager;
        //     _signInManager = signInManager;
        //     _mapper = mapper;
        //     _config = config;
        // }
        private readonly IAuthRepository _repo;

        public AuthController(IAuthRepository repo,
        IConfiguration config){

             _repo = repo;
          _config = config;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]UserForRegisterDto userForRegisterDto)
        {
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
            if(await _repo.UserExists(userForRegisterDto.Username))
            return BadRequest("User already exist");

            var userToCreate=new User {
                Username=userForRegisterDto.Username
            };

            var createUser=await _repo.Register(userToCreate,userForRegisterDto.Password);
            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
            var userFromRepo=await _repo.Login(userForLoginDto.Username,userForLoginDto.Password);

            if(userFromRepo ==null) 
            return Unauthorized();

            var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                    new Claim(ClaimTypes.Name, userFromRepo.Username)
                };

            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });
        }

        // private async Task<string> GenerateJwtToken(User user)
        // {
        //     var claims = new List<Claim>
        //     {
        //         new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
        //         new Claim(ClaimTypes.Name, user.Username)
        //     };

        //     var roles = await _userManager.GetRolesAsync(user);

        //     foreach (var role in roles)
        //     {
        //         claims.Add(new Claim(ClaimTypes.Role, role));
        //     }

        //     var key = new SymmetricSecurityKey(Encoding.UTF8
        //         .GetBytes(_config.GetSection("AppSettings:Token").Value));

        //     var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        //     var tokenDescriptor = new SecurityTokenDescriptor
        //     {
        //         Subject = new ClaimsIdentity(claims),
        //         Expires = DateTime.Now.AddDays(1),
        //         SigningCredentials = creds
        //     };

        //     var tokenHandler = new JwtSecurityTokenHandler();

        //     var token = tokenHandler.CreateToken(tokenDescriptor);

        //     return tokenHandler.WriteToken(token);
        // }
    }
}