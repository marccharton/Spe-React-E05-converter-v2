// == Import npm
import React from 'react';

// == Composant
class CurrencyFooter extends React.Component {
 
  state = {
    baseValue: 1
  }

  render() {
    return (
      <div className="currency-footer">
        <h1 className="currency-footer-title text-big">{this.props.currency.name}</h1>
        <p className="currency-footer-value text-big">{this.state.baseValue * this.props.currency.rate}</p>
      </div>
    );
  }
  
}

// == Export
export default CurrencyFooter;
