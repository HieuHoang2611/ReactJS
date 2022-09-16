import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterDemo from './Component/RouterDemo';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import RouterBookKeeper from './Component/RouterBookKeeper';
import Invoices from './Component/Invoices';
import Expenses from './Component/Expenses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RouterBookKeeper />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="invoices/:invoiceId" element={<Invoices />} />
        <Route
        path="*"
        element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
        }
      />
      </Route>
    </Routes>
  </BrowserRouter>
);
