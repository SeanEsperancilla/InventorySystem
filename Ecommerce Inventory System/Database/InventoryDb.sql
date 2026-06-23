CREATE DATABASE InventoryDb
GO

USE InventoryDb
GO

CREATE TABLE Products (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Sku NVARCHAR(50) NOT NULL,
    Name NVARCHAR(200) NOT NULL,
    Description NVARCHAR(MAX) NULL,
    Price DECIMAL(18,2) NOT NULL,
    Stock INT NOT NULL,
    LowStockThreshold INT NOT NULL DEFAULT 5,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETDATE()
)

CREATE TABLE Orders (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    OrderNumber NVARCHAR(50) NOT NULL,
    CustomerName NVARCHAR(200) NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
    TotalAmount DECIMAL(18,2) NOT NULL
)

CREATE TABLE OrderItems (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    OrderId INT NOT NULL FOREIGN KEY REFERENCES Orders(Id),
    ProductId INT NOT NULL FOREIGN KEY REFERENCES Products(Id),
    Quantity INT NOT NULL,
    UnitPrice DECIMAL(18,2) NOT NULL
)

INSERT INTO Products (Sku, Name, Description, Price, Stock, LowStockThreshold)
VALUES
('SKU-001','Blue T-Shirt','Cotton blue t-shirt',199.00,50,5),
('SKU-002','Red Mug','Ceramic mug',99.00,12,3),
('SKU-003','Notebook','A5 notebook',49.00,3,5)
