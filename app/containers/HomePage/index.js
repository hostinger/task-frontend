import React from 'react';
import WhyPickUs from '../../components/WhyPickUs';
import './css/style.css';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <main className="wraper">
          <div className=" mainPosition">
            <div className="mainTextWraper">
              <h4>New Year offer</h4>
              <h4>
                <span className="percentOff">82% OFF </span>
                web hosting
              </h4>
              <div className="counterWraper">
                <span className="counterTriangleR" />
                <div className="counterInerWraper">
                  <div className="timeWraper">
                    <div>00</div>
                    <div className="timeName">days</div>
                  </div>
                  <div className="timeWraper">
                    <div>16</div>
                    <div className="timeName">hours</div>
                  </div>
                  <div className="timeWraper">
                    <div>18</div>
                    <div className="timeName">minutes</div>
                  </div>
                  <div className="timeWraper">
                    <div>29</div>
                    <div className="timeName">seconds</div>
                  </div>
                </div>
                <span className="counterTriangleL" />
              </div>
              <div>
                <button type="button" className="mainButton">
                  get started now
                </button>
              </div>
            </div>
            <div>
              <div>
                <div className="saveFromPrice">save 82%</div>
                <div className="triangle" />
              </div>
              <div className="priceWraper">
                <div className="priceCurrency"> $ </div>
                <div className="priceMax"> 1 </div>
                <div className="priceInnerWraper">
                  <div className="priceMin">45</div>
                  <div className="priceMonth">/mo</div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <WhyPickUs />
      </React.Fragment>
    );
  }
}
