import { useEffect, useState } from "react";
import api from "../api";

interface SalesReportData {
  totalSales: number;
  totalOrders: number;
  topProducts: {
    productId: number;
    quantity: number;
  }[];
}

export default function SalesReport() {
  const [report, setReport] = useState<SalesReportData | null>(null);

  useEffect(() => {
    const loadReport = async () => {
      try {
        const res = await api.get("/reports/sales");
        setReport(res.data);
      } catch (error) {
        console.error("Failed to load sales report:", error);
      }
    };

    loadReport();
  }, []);

  if (!report) {
    return <p>Loading sales report...</p>;
  }

  return (
    <div>
      <h2>Sales Report</h2>

      <p>
        <strong>Total Sales:</strong> ₱{report.totalSales}
      </p>

      <p>
        <strong>Total Orders:</strong> {report.totalOrders}
      </p>
    </div>
  );
}