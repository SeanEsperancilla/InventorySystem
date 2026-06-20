namespace Ecommerce_Inventory_System.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Sku { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public int Stock { get; set; }
        public int LowStockThreshold { get; set; } = 5;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
