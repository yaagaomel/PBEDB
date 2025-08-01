import { useState } from 'react';
import './App.css';

function App() {
  const [filter, setFilter] = useState('');

  const mockData = [
    { service: 'Amazon', bins: '476331, 498442', result: 'Alta aprovação', gateway: 'Verificada', lastTest: '2025-08-01' },
    { service: 'AliExpress', bins: '498442, 498408', result: 'Passa sem 3DS', gateway: 'Frágil', lastTest: '2025-08-01' }
  ];

  const filtered = mockData.filter(item =>
    item.service.toLowerCase().includes(filter.toLowerCase()) || item.bins.includes(filter)
  );

  return (
    <div className="App">
      <h1>P4v1LBIN ExclusiveDB</h1>
      <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Buscar serviço ou BIN" />
      <table>
        <thead>
          <tr><th>Serviço</th><th>BINs</th><th>Resultado</th><th>Gateway</th><th>Último Teste</th></tr>
        </thead>
        <tbody>
          {filtered.map((entry, i) => (
            <tr key={i}><td>{entry.service}</td><td>{entry.bins}</td><td>{entry.result}</td><td>{entry.gateway}</td><td>{entry.lastTest}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;