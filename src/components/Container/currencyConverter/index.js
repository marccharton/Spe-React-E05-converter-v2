// == Import npm
import React from 'react';

// == Imports Composants
import CurrencyHeader from './CurrencyHeader';
import CurrencyList from './CurrencyList';
import CurrencyFooter from './CurrencyFooter';

// == Composant
const CurrencyConverter = () => {
  
  const currentCurrency = {
    name: "United Pouet",
    value: 1.5,
  };
  
  return (
    <div className="currency-converter">
        <CurrencyHeader />
        <CurrencyList />
        <CurrencyFooter {...currentCurrency} />
    </div>
  );
}

export default CurrencyConverter;
