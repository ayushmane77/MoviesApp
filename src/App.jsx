import { useState } from 'react';
import Headers from './Components/Headers';
import Hero from './Components/Hero';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Headers searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Hero searchTerm={searchTerm} />
    </>
  );
}

export default App;
