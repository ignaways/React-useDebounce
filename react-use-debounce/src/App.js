import './App.css';
import { useState } from 'react';
import Pirates from './components/Pirates';
import Search from './components/Search';
function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="container__main">
      <Search onSearch={setSearch} />
      <Pirates search={search} />
    </div>
  );
}

export default App;
