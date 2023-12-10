import React from "react";
import "./DataTable.css";

export default function DataTable({ children }) {
  return (
      <table className="w-full">{children}</table>
  );
}
