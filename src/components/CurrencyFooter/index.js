// == Import npm
import React from 'react';

// == Styles imports
import './styles.scss';

// == Composant
class CurrencyFooter extends React.Component {
 
  state = {
    baseValue: 1
  }

  render() {
    return (
      <div className="currency-footer">
        <h1 className="currency-footer-title text-strong">{this.props.currency.name}</h1>
        <p className="currency-footer-value text-strong">{this.state.baseValue * this.props.currency.rate}</p>
      </div>
    );
  }
  
}

// == Export
export default CurrencyFooter;
