// == Import npm
import React from 'react';

// == Styles imports
import './styles.scss';

// == Import data
import currencies from '../../data/currencies';

// == Imports Composants
import CurrencyHeader from '../CurrencyHeader';
import CurrencyList from '../CurrencyList';
import CurrencyFooter from '../CurrencyFooter';

// == Composant
class CurrencyConverter extends React.Component {
  
  state = {
    currency: {
      name: "United Pouet",
      value: 1.5,
    },
    currencyList: currencies,
  }

  handleChangeCurrency = (event) => {
    const newCurrency = this.state.currencyList.find((item) => {
      return item.name === event.target.innerText;
    });

    this.setState({
      ...this.state,
      currency: newCurrency,
    });
  }

  render() {
    return (
      <div className="currency-converter">
          <CurrencyHeader />
          <CurrencyList currencyList={this.state.currencyList} handleClick={this.handleChangeCurrency}/>
          <CurrencyFooter currency={this.state.currency} />
      </div>
    );
  }
}

export default CurrencyConverter;
