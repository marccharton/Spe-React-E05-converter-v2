// == Import npm
import React from 'react';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Imports Composants
import CurrencyConverter from '../Container/CurrencyConverter';

// == Composant
const App = () => {
  
  return (
    <div className="app">
        <CurrencyConverter />
    </div>
  );
}

export default App;
