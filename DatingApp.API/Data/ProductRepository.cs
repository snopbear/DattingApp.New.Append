using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Helpers;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;
namespace DatingApp.API.Data
{
    public class ProductRepository: IProductRepository
    {
        private readonly DataContext _context;
        public ProductRepository(DataContext context)
        {
            _context = context;
        }
     public async Task<IEnumerable<Product>> GetProducts()
        {
           var products = await _context.Products.ToListAsync();
            return products;
        }
        
    }
}