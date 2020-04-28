// == Import npm
import React from 'react';

// == Styles imports
import './styles.scss';

// == Composant
class CurrencyHeader extends React.Component {
  
  render() {
    return (
      <header className="currency-header">
        <h1 className="text-strong">Converter</h1>
        <p>1 euro</p>
      </header>
    );
  }
  
}

// == Export
export default CurrencyHeader;
