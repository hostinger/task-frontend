import React from 'react';
import PromoPrice from './PromoPrice.jsx';
import PromotionInfo from './PromotionInfo.jsx';

class Promotion extends React.Component {
    render() {
      return (
        <div className="promotion wrapper">
          <div className="content-left">
            <PromotionInfo
              type={this.props.type}
              discount={this.props.discount}
              title={this.props.title}
            />
          </div>
          <div className="content-right">
            <PromoPrice
              discount={Number(this.props.discount)} //Could be discount coming from backend.
              price={806} //Could be price coming from backend.
            />
          </div>
        </div>
      );
    }
}

export default Promotion;
