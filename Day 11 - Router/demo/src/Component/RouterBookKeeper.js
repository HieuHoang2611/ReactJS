import * as React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

export default function RouterBookKeeper() {
    return (
      <div>
        <nav>
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>
        </nav>
        <Outlet />  {/*Sử dụng Outlet để render component con*/}
      </div>
    );
  }