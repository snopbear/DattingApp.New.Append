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
    public class ProductCategoryController: ControllerBase
    {
                        private readonly IProductCategoryRepository _repo;
        private readonly IMapper _mapper;
        public ProductCategoryController(IProductCategoryRepository repo,IMapper mapper){

             _repo = repo;
             _mapper = mapper;
        }

              [HttpGet]
        public async Task<ActionResult> GetProductCategory()
        {
           var productCategories = await _repo.GetProductCategory();
           var productCategoriesToReturn= _mapper.Map<IEnumerable<ProductCategory>>(productCategories);
           return Ok(productCategoriesToReturn);
        }
    }
}