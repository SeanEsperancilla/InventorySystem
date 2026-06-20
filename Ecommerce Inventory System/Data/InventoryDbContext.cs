using Microsoft.EntityFrameworkCore;
using Ecommerce_Inventory_System.Models;

namespace Ecommerce_Inventory_System.Data
{
    public class InventoryDbContext : DbContext
    {
        public InventoryDbContext(DbContextOptions<InventoryDbContext> options) : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>()
                .HasMany(o => o.Items)
                .WithOne(i => i.Order)
                .HasForeignKey(i => i.OrderId);

            modelBuilder.Entity<Product>()
                .HasIndex(p => p.Sku)
                .IsUnique();
        }
    }
}
