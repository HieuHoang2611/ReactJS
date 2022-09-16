import { Link } from "react-router-dom";

export default function Invoices() {
    let invoiceId = 1000;
  
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
        <Link to={`/invoices/${invoiceId}`} key={invoiceId}>
          ID {invoiceId}
        </Link>
      </main>
    );
  }