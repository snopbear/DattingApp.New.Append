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
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController: ControllerBase
    {
                private readonly IProductRepository _repo;
        private readonly IMapper _mapper;
        public ProductController(IProductRepository repo,IMapper mapper){

             _repo = repo;
             _mapper = mapper;
        }

              [HttpGet]
        public async Task<ActionResult> GetProducts()
        {
           var products = await _repo.GetProducts();
           var productsToReturn= _mapper.Map<IEnumerable<ProductsDto>>(products);
           return Ok(productsToReturn);
        }

    }
}