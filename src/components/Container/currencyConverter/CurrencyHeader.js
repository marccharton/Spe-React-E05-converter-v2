// == Import npm
import React from 'react';

// == Composant
class CurrencyHeader extends React.Component {
  
  render() {
    return (
      <header className="currency-header">
        <h1 className="text-big">Converter</h1>
        <p>1 euro</p>
      </header>
    );
  }
  
}

// == Export
export default CurrencyHeader;
