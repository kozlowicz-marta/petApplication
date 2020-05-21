import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PetsTable from 'components/PetsTable/PetsTable';

function App() {
  return (
    <div className="App" >
      <SearchBar />
      <PetsTable />
    </div>
  );
}

export default App;