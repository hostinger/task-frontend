<template>
  <div>
    <!-- Responsive NavBar for Mobile START -->
    <b-navbar class="d-md-none navbarStyle" sticky="true" type="dark" toggleable="true">
      <b-navbar-brand href="#">
        <img src="../assets/logo.svg" alt="hostinger.com">
      </b-navbar-brand>
  
      <b-navbar-toggle class="toggleButtonStyle" target="nav_collapse" />
  
      <b-collapse is-nav id="nav_collapse">
        <div>
          <b-navbar-nav>
            <div class="divider mt-2"></div>
            <b-nav-item class="mt-3" href="#">WEB HOSTING</b-nav-item>
            <b-nav-item class="mt-3" href="#">CLOUD HOSTING</b-nav-item>
            <b-nav-item class="mt-3" href="#">VPS HOSTING</b-nav-item>
            <b-nav-item class="mt-3" href="#">DOMAIN CHECKER</b-nav-item>
            <b-nav-item class="mt-3" href="#">WEBSITE BUILDER</b-nav-item>
            <div class="divider my-3"></div>
          </b-navbar-nav>
        </div>
      </b-collapse>
    </b-navbar>
    <!-- Responsive NavBar for Mobile END -->
    <!-- background div -->
    <div class="bg">
      <!-- bootstrap container -->
      <div class="container">
        <!-- simple navbar TODO: implement responsive navbar for mobile -->
        <div class="d-none d-md-flex row py-5 justify-content-center align-items-center text-center no-gutters">
          <div class="col-12 col-sm-12 col-md col-lg text-left col-xl logo">
            <a href="/">
              <img src="../assets/logo.svg" alt="hostinger.com">
            </a>
          </div>
  
          <div class="col menu-item">
            <a href="/">WEB HOSTING</a>
          </div>
  
          <div class="col menu-item">
            <a href="/">
              <span class="nav-item-sale">ON SALE</span> CLOUD HOSTING
            </a>
          </div>
  
          <div class="col menu-item">
            <a href="/">VPS HOSTING</a>
          </div>
  
          <div class="col menu-item">
            <a href="/">DOMAIN CHECKER</a>
          </div>
  
          <div class="col menu-item">
            <a href="/">WEBSITE BUILDER</a>
          </div>
        </div>
        <!-- Navigation END-->
        <!-- the START of the main Content -->
        <div class="row pt-5 mt-md-3">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 offer-text ml-md-3">
            <div class="row discount justify-content-center justify-content-md-start">New Year Offer &#10;</div>
  
            <div class="row discount justify-content-center justify-content-md-start">
              <font class="discountOff" color="#F8525B">82% OFF&nbsp;</font>
              Web Hosting
            </div>
  
            <!-- Countdown START TODO: add a zero if the days string is below 10 -->
            <div class="row mx-auto justify-content-center justify-content-md-start justify-content-lg-start">
  
  
  
              <!-- !!!!! CHANGE DATE HERE !!!!! -->
  
              <countdown class="countdown-main mb-4" :end-time="new Date('March 7 , 2019 00:00:00').getTime()">
                <div class="row countdown-row my-3 no-gutters" slot="process" slot-scope="anyYouWantedScopName">
                  <div class="col">
                    <font-awesome-icon class="countdown-caret mt-2" icon="caret-right" />
                  </div>
                  <div id="days" class="col px-3 px-sm-4 countdown text-left">
                    <p>{{ ` ${anyYouWantedScopName.timeObj.d} ` }}</p>
                    <span class="time-name days">DAYS</span>
                  </div>
                  <div class="col countdown px-3 px-sm-4 text-left">
                    {{ ` ${anyYouWantedScopName.timeObj.h}` }}
                    <span class="time-name hours">HOURS</span>
                  </div>
                  <div class="col countdown px-3 px-sm-4 text-left">
                    {{ ` ${anyYouWantedScopName.timeObj.m}` }}
                    <span class="time-name minutes">MINUTES</span>
                  </div>
                  <div class="col countdown px-3 px-sm-4 text-left">
                    {{ ` ${anyYouWantedScopName.timeObj.s}` }}
                    <span class="time-name seconds">SECONDS</span>
                  </div>
                  <div class="col">
                    <font-awesome-icon class="countdown-caret mt-2" icon="caret-left" />
                  </div>
                </div>
              </countdown>
            </div>
            <!-- Countdown END -->
            <div class="row mt-xl-5 pt-xl-4 mt-lg-5 pt-lg-4 pt-md-5 mt-md-4 mt-sm-5 pt-sm-2 pt-xs-0 mt-xs-0 justify-content-center justify-content-md-start justify-content-lg-start text-center">
              <b-button type="button" class="btn btn-lg btn-primary btnStyle">
                <span class="mx-4 my-1">GET STARTED NOW</span>
              </b-button>
            </div>
          </div>
          <div class="row mx-auto">
            <div class="col currency text-right justify-content-center">$</div>
  
            <div class="col price-big">
              <!-- box for the discount banner -->
              <div id="discount-banner">
                <div id="square">
                  <span id="square-text">SAVE 82%</span>
  
                  <font-awesome-icon id="caret-down" icon="caret-down" />
                </div>
              </div>
              <p class="text-right">1</p>
            </div>
            <div class="col price-right-side">
              <div class="row price-small mt-3">45</div>
              <div class="row month mt-3 mt-sm-5">/mo</div>
            </div>
          </div>
        </div>
        <!-- END of the Content -->
        <!-- check list Content Start -->
        <div class="row py-5 justify-content-center align-items-center text-center no-gutters">
          <div class="col-12 col-sm col-md col-lg text-xl-left mr-auto check-text">
            <font-awesome-icon class="checkStyle" icon="check" />Guaranteed 99.9% Uptime
          </div>
  
          <div class="col-12 col-sm col-md col-lg mx-auto check-text">
            <font-awesome-icon class="checkStyle" icon="check" />Superior Speed Performance
          </div>
  
          <div class="col-12 col-sm col-md col-lg mx-auto check-text check-text-support">
            <font-awesome-icon class="checkStyle" icon="check" />24/7 Support Chat
          </div>
  
          <div class="col-12 col-sm col-md col-lg ml-auto check-text">
            <font-awesome-icon class="checkStyle" icon="check" />30-Day Money-Back Guarantee
          </div>
        </div>
        <!-- check list Content End -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    props: {
      msg: String
    }
  };
</script>


<style lang="scss">
  //FIXME: nest the styles so it can be more readable
  //BACKGROUND
  .bg {
    background-image: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.35)), url("../assets/background.jpg");
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  // MOBILE TOGGLE BUTTON 
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
  }
  
  // DIVIDER CLASS FOR RESPONSIVE NAVBAR
  .divider {
    border-top: 2px solid;
    border-top-color: white;
  }
  
  .navbarStyle {
    background-color: #6263b7 !important;
  }
  
  // Responsive media queries for different resolutions ~~START~~
  @media (min-width: 1200px) {
    .logo {
      padding-right: 150px !important;
    }
    .bg {
      /* The image used */
      background-size: 100% cover;
    }
  }
  
  @media (min-width: 768px) and (max-width: 1200px) {
    .logo {
      padding-right: 100px !important;
    }
    .menu-item {
      font-size: 14px !important;
      max-width: 63px !important;
      margin-left: 10px !important;
      margin-right: 10px !important;
    }
    .check-text {
      font-size: 16px !important;
      max-width: 175px !important;
    }
    .check-text-support {
      max-width: 130px !important;
    }
    .currency {
      font-size: 6em !important;
      padding-top: 55px !important;
    }
    .price-big {
      font-size: 300px !important;
    }
    .price-small {
      font-size: 4em !important;
    }
    .month {
      font-size: 3em !important;
      font-weight: 400 !important;
    }
    .countdown-row {
      max-width: 100% !important;
    }
    #discount-banner {
      left: 60px !important;
    }
    .bg {
      background-size: 100% cover !important;
    }
  }
  
  @media (min-width: 576px) and (max-width: 768px) {
    .logo {
      padding-right: 0px !important;
      margin-bottom: 30px;
    }
    #discount-banner {
      left: 60px !important;
    }
    .menu-item {
      font-size: 14px !important;
      max-width: 63px !important;
      margin-left: 10px !important;
      margin-right: 10px !important;
    }
    .check-text {
      font-size: 14px !important;
    }
    .currency {
      font-size: 6em !important;
      padding-top: 55px !important;
    }
    .price-big {
      font-size: 300px !important;
    }
    .price-small {
      font-size: 4em !important;
    }
    .month {
      font-size: 3em !important;
      font-weight: 400 !important;
    }
    .countdown-row {
      max-width: 100% !important;
      left: 105px !important;
    }
    .bg {
      background-size: 100% cover !important;
    }
    .offer-text {
      margin-bottom: 100px !important;
    }
    .discount {
      text-align: center !important;
    }
  }
  
  @media (max-width: 576px) {
    .logo {
      padding-right: 0px !important;
      margin-bottom: 30px;
    }
    #discount-banner {
      left: 40px !important;
    }
    .nav-item-sale {
      max-width: 50px !important;
      width: 50px !important;
    }
    .check-text {
      font-size: 18px !important;
      padding-top: 10px !important;
    }
    .currency {
      font-size: 5.5em !important;
      padding-top: 55px !important;
    }
    .countdown-row {
      max-width: 100% !important;
    }
    .price-big {
      font-size: 250px !important;
      max-width: 150px !important;
    }
    .price-right-side {
      max-width: 150px !important;
    }
    .price-small {
      font-size: 4em !important;
    }
    .month {
      font-size: 3em !important;
      font-weight: 400 !important;
    }
    .countdown-row {
      max-width: 100% !important;
      position: relative !important;
    }
    .bg {
      background-size: 100% cover !important;
    }
    .offer-text {
      margin-bottom: 100px !important;
    }
    .discount {
      text-align: center !important;
    }
    .time-name {
      font-size: 0.35em !important;
    }
    .days {
      right: 18px !important;
    }
    .hours {
      right: 15px !important;
    }
    .minutes {
      right: 10px !important;
    }
    .seconds {
      right: 10px !important;
    }
  }
  
  // Responsive media queries for different resolutions ~~END~~
  // General style for the component
  a {
    color: #fff !important;
    font-weight: 600 !important;
  }
  
  a:hover {
    text-decoration: none !important;
    color: #f8525b !important;
    transition: all 0.3s cubic-bezier(0.08, 0.82, 0.17, 1);
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
    transition-delay: 0s;
  }
  
  //NAVIGATION STYLES
  .menu-item {
    font-size: 14px;
    position: relative;
  }
  
  .nav-item-sale {
    position: absolute;
    font-size: 10px;
    color: #ffe400;
    top: -10px;
    font-weight: 600;
  }
  
  // PRICING STYLES
  .currency {
    font-size: 7em;
    font-weight: 700;
    padding-top: 70px;
    line-height: 0.8em;
    max-width: 70px !important;
    padding-right: 0 !important;
    padding-left: 0px !important;
  }
  
  .price-big {
    font-size: 400px;
    font-weight: 700;
    line-height: 0.8em;
    padding-left: 0 !important;
    overflow: visible;
  }
  
  .price-small {
    font-size: 6em;
    font-weight: 700;
  }
  
  .month {
    font-size: 4em;
    font-weight: 700;
  }
  
  .discount {
    font-size: 2.5em;
    font-weight: 700;
  }
  
  //BUTTON STYLE
  .btnStyle {
    background-color: #f8525b !important;
    border: 0 !important;
    font-weight: 700 !important;
  }
  
  // Arrows that point to countdown
  .countdown-caret {
    color: #f8525b;
    font-size: 2em !important;
  }
  
  .countdown-caret-left {
    width: 1em !important;
    color: #f8525b;
    font-size: 2em !important;
    padding-left: 10px;
  }
  
  // Countdown styles
  .countdown-row {
    max-width: 100%;
    left: 0px;
    position: absolute;
  }
  
  .countdown {
    font-weight: 700 !important;
    font-size: 1.4em;
    position: relative;
  }
  
  .time-name {
    position: absolute;
    font-size: 0.45em;
  }
  
  .days {
    top: 30px;
    right: 23px;
  }
  
  .hours {
    top: 30px;
    right: 18px;
  }
  
  .minutes {
    top: 30px;
    right: 12px;
  }
  
  .seconds {
    top: 30px;
    right: 12px;
  }
  
  // Check List Styles
  .checkStyle {
    color: rgb(71, 243, 49);
    margin-right: 10px;
  }
  
  .check-text {
    font-size: 17px;
    position: relative;
  }
  
  // Discount square banner with arrow pointing down
  #square {
    width: 120px;
    height: 35px;
    background-color: #fd9d9d;
    display: block;
    line-height: 15px !important;
    position: relative;
    z-index: 2;
    overflow: visible;
  }
  
  #square-text {
    font-weight: 700 !important;
    font-size: 16px !important;
    position: absolute;
    padding-left: 22px;
    padding-top: 10px;
    overflow: visible;
  }
  
  #caret-down {
    font-size: 50px !important;
    color: #fd9d9d;
    top: 13px;
    left: 40%;
    position: absolute;
    z-index: 1;
    overflow: visible;
  }
  
  #discount-banner {
    overflow: visible;
    position: absolute;
    left: 95px;
    top: -50px;
  }
</style>
