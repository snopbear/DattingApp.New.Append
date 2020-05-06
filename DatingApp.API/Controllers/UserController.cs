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
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;
        public UserController(IDatingRepository repo,IMapper mapper){

             _repo = repo;
             _mapper = mapper;
        }

      // GET api/values
        [HttpGet]
        public async Task<ActionResult> GetUsers()
        {
           var users = await _repo.GetUsers();
           var userToReturn= _mapper.Map<IEnumerable<UserForListDto>>(users);
           return Ok(userToReturn);
        }


          // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult> GetUser(int id)
        {
          var user = await _repo.GetUser(id);
          var userToReturn= _mapper.Map<UserForDetailedDto>(user);
           return Ok(userToReturn);
        }   

      [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _repo.GetUser(id);

            _mapper.Map(userForUpdateDto, userFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating user {id} failed on save");
        }

    }
}