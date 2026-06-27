export interface Product {
  id: number;
  sku: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  lowStockThreshold: number;
  createdAt?: string;
}

export interface OrderItem {
  productId: number;
  quantity: number;
}

export interface Order {
  id?: number;
  orderNumber?: string;
  customerName?: string;
  createdAt?: string;
  totalAmount?: number;
  items: OrderItem[];
}

export interface SalesReport {
  totalSales: number;
  totalOrders: number;
  topProducts: { productId: number; quantity: number }[];
}
