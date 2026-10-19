import React, { useState } from 'react';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import './styles/theme.css';

export default function App() {
  const [metrics] = useState([
    { id: 1, label: 'Active Sessions', value: '1,420', change: 12 },
    { id: 2, label: 'API Queries', value: '89.4k', change: 5 },
    { id: 3, label: 'System Health', value: '99.9%', change: 0 }
  ]);

  return (
    <div>
      <Header />
      <main style={{ padding: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {metrics.map(m => <MetricCard key={m.id} {...m} />)}
      </main>
    </div>
  );
}