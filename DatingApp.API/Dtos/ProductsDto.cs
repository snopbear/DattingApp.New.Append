namespace DatingApp.API.Dtos
{
    public class ProductsDto
    {
               public int Id { get; set; }
        public string ProductName { get; set; }
        public string ProductCode { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int CategoryId { get; set; }
        public string SupplierIds { get; set; }
        public int QuantityInStock { get; set; }
    }
}