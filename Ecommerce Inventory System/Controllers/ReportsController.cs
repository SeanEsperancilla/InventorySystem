using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ecommerce_Inventory_System.Data;

namespace Ecommerce_Inventory_System.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReportsController : ControllerBase
    {
        private readonly InventoryDbContext _db;
        public ReportsController(InventoryDbContext db) => _db = db;

        [HttpGet("sales")]
        public async Task<IActionResult> SalesReport([FromQuery] DateTime? from, [FromQuery] DateTime? to)
        {
            var q = _db.Orders.Include(o => o.Items).AsQueryable();
            if (from.HasValue) q = q.Where(o => o.CreatedAt >= from.Value);
            if (to.HasValue) q = q.Where(o => o.CreatedAt <= to.Value);
            var orders = await q.ToListAsync();
            var totalSales = orders.Sum(o => o.TotalAmount);
            var totalOrders = orders.Count;
            var topProducts = orders.SelectMany(o => o.Items)
                .GroupBy(i => i.ProductId)
                .Select(g => new { ProductId = g.Key, Quantity = g.Sum(i => i.Quantity) })
                .OrderByDescending(x => x.Quantity)
                .Take(10)
                .ToList();

            return Ok(new { totalSales, totalOrders, topProducts });
        }
    }
}
