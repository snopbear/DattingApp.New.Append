using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DatingApp.API.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string ProductCode { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int CategoryId { get; set; }
        public string SupplierIds { get; set; }
        public int QuantityInStock { get; set; }
    
        [ForeignKey("CategoryId")]
        public virtual ProductCategory ProductCategorys { get; set; }

    }
}