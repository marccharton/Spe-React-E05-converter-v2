// == Import npm
import React from 'react';
import currencies from '../../../data/currencies';

// == Composant
class CurrencyList extends React.Component {

  render() {
    const list = currencies.map((currency) => {
      return (
        <li key={currency.name} className="currency-list-item">
          <a href="#">{currency.name}</a>
        </li>
      );
    });

    return (
      <div className="currency-list">
        <p className="currency-list-title text-big">Currencies</p>
        <ul>{list}</ul>
      </div>
    );
  }
  
}

// == Export
export default CurrencyList;
