import React from 'react';



function Banner() {
  return (
    
      <section className="hostinger__body  container">
        <div className="hostinger__offer">
          <div className="hostigner__offer-left">
              <h1 className="hostinger__offer-heading">New Year Offer<br /> <span>82% OFF</span> Web Hosting</h1>
              
              <div className="hostinger__offer-countdown">
                <div className="hostinger__offer-triangle--left"></div>
                <div className="hostinger__offer-countdown-holder">
                  <div className="hostinger__offer-countdown-item"><p>00</p>
                  <p>DAYS</p>
                  </div>
                  <div className="hostinger__offer-countdown-item"><p>16</p>
                  <p>HOURS</p>
                  </div>
                  <div className="hostinger__offer-countdown-item"><p>18</p>
                  <p>MINUTES</p>
                  </div>
                  <div className="hostinger__offer-countdown-item"><p>29</p>
                  <p>SECONDS</p>
                  </div>
                </div>
                <div className="hostinger__offer-triangle--right"></div>
              </div>
              <button className="hostinger__offer-btn">GET STARTED NOW</button>
            </div>
          <div className="hostigner__offer-right">

            <div className="hostinger__price">
              <div className="hostinger__price-discount">
                <div className="hostinger__price-discount-save">SAVE 82%</div>
                <div className="hostinger__price-discount-arrow"></div>
              </div>
              <div className="hostinger__price-box">
                <div className="hostinger__price-box--currency">$</div>
                <div className="hostinger__price-box--symbol">1</div>
                <div className="hostinger__price-box--holder">
                  <div className="hostinger__price-box--holder-small">45</div>
                  <div className="hostinger__price-box--holder-per">/mo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="hostinger__benefits">
          <div className="hostinger__benefits-item">
            <i className="material-icons hostinger__benefits-icon">check</i>
            <p className="hostinger__benefits-text">Guaranteed 99.9% Uptime</p>
          </div>
           <div className="hostinger__benefits-item">
            <i className="material-icons hostinger__benefits-icon">check</i>
            <p className="hostinger__benefits-text">Superior Speed </p>
          </div>
          <div className="hostinger__benefits-item">
            <i className="material-icons hostinger__benefits-icon">check</i>
            <p className="hostinger__benefits-text">24/7 Support Chat</p>
          </div>
          <div className="hostinger__benefits-item">
            <i className="material-icons hostinger__benefits-icon">check</i>
            <p className="hostinger__benefits-text">30-Day Money-Back Guarantee</p>
          </div>
        </div>
        
        
      </section>

      
    
  );
}

export default Banner;
