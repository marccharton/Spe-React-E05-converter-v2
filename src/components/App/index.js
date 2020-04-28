// == Import npm
import React from 'react';

// == Import
import './styles.css';

// == Imports Composants
import CurrencyConverter from '../CurrencyConverter';

// == Composant
const App = () => {
  
  return (
    <div className="app">
        <CurrencyConverter />
    </div>
  );
}

export default App;
