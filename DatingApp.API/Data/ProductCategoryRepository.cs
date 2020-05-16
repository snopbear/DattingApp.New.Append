using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Helpers;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class ProductCategoryRepository:IProductCategoryRepository
    {
        private readonly DataContext _context;

        public ProductCategoryRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ProductCategory>> GetProductCategory()
        {
           var ProductCategories = await _context.ProductCategorys.ToListAsync();
            return ProductCategories;
        }  
    }
}