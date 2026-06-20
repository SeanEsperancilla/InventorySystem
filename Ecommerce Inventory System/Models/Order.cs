namespace Ecommerce_Inventory_System.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string OrderNumber { get; set; } = Guid.NewGuid().ToString();
        public string? CustomerName { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public decimal TotalAmount { get; set; }
        public List<OrderItem> Items { get; set; } = new();
    }
}
