// == Import npm
import React from 'react';

// == Composant
class CurrencyHeader extends React.Component {
  state = {
    fromValue: 1,
    currency: "euro",
  }
  
  render() {
    return (
      <header className="currency-header">
        <h1 className="text-big">Converter</h1>
        <p>{this.state.fromValue} {this.state.currency}</p>
      </header>
    );
  }
  
}

// == Export
export default CurrencyHeader;
