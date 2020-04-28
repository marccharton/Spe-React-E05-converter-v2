// == Import npm
import React from 'react';
import currencies from '../../data/currencies';

// == Styles imports
import './styles.scss';

// == Composant
class CurrencyList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.currencyList.map((currency) => {
      return (
        <li key={currency.name} className="currency-list-item" onClick={this.props.handleClick}>
          <a href="#">{currency.name}</a>
        </li>
      );
    });

    return (
      <div className="currency-list">
        <p className="currency-list-title text-strong">Currencies</p>
        <ul>{list}</ul>
      </div>
    );
  }
}

// == Export
export default CurrencyList;
