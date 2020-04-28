// == Import npm
import React from 'react';

// == Composant
class CurrencyFooter extends React.Component {
 
  render() {
    return (
      <div className="currency-footer">
        <h1 className="currency-footer-title text-big">{this.props.name}</h1>
        <p className="currency-footer-value text-big">{this.props.value}</p>
      </div>
    );
  }
  
}

// == Export
export default CurrencyFooter;
