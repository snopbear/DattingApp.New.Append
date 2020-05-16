using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Helpers;
using DatingApp.API.Models;
namespace DatingApp.API.Data
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetProducts();
    }
}