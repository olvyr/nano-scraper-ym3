import React from 'react';

export default function MetricCard({ label, value, change }) {
  return (
    <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px", margin: "10px" }}>
      <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>{label}</span>
      <h3 style={{ margin: "8px 0" }}>{value}</h3>
      <small style={{ color: change >= 0 ? "#10b981" : "#ef4444" }}>{change >= 0 ? "+" : ""}{change}%</small>
    </div>
  );
}