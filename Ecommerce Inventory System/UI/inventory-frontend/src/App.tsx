import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import OrderForm from "./components/OrderForm";
import SalesReport from "./components/SalesReport";

function App() {
  return (
    <div className="container">
      <header>
        <h1>E-Commerce Inventory System</h1>
        <p>Inventory Management Dashboard</p>
      </header>

      <section className="card">
        <ProductForm />
      </section>

      <section className="card">
        <ProductList />
      </section>

      <section className="card">
        <OrderForm />
      </section>

      <section className="card">
        <SalesReport />
      </section>
    </div>
  );
}

export default App;