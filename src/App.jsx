import { useState, useEffect } from 'react';
import Headers from './Components/Headers';
import Hero from './Components/Hero';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(''); // 👈 for debounced value

  // Debouncing effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 600); // wait 600ms after last keystroke

    return () => {
      clearTimeout(handler); // clear previous timer on each re-render
    };
  }, [searchTerm]);

  return (
    <>
      <Headers searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* 👇 Pass debounced value instead of raw searchTerm */}
      <Hero searchTerm={debouncedSearchTerm} />
    </>
  );
}

export default App;
