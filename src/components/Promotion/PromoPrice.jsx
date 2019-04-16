import React from 'react';
import Tooltip from '../Common/Tooltip.jsx';

class PromoPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: ''
    };
  }

  componentWillMount() {
    this.calculatePrice();
  }

  calculatePrice() {
    const price = this.props.price * (100 - this.props.discount) / 100;
    this.setState({
      price
    });
  } 

  render() {
      return !!this.state.price &&(
          <div className="promo-price wrapper">
            <Tooltip 
              text = { "Save " + this.props.discount + "%" }
            />
            <div className="promo-price inner-wrapper">
              <p className="currency">$</p>
              <p className="integer-price"> { Math.floor(this.state.price / 100) } </p>
              <div className="promo-end-wrapper">
                <p className="decimal-price"> { this.state.price.toString().split('.')[1] } </p>
                <p className="promo-pay-per">/mo</p>
              </div>
            </div>
          </div>
      );
  }
}

export default PromoPrice;
