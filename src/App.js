import React, { useState, useEffect } from "react";
import "./ui/styles/App.scss";
import Header from "./ui/common/Header";
import Overflow from "./ui/common/Overflow";
import Features from "./ui/common/Features";
import SubscriptionDiscount from "./ui/common/SubscriptionDiscount";
import CountdownOffer from "./ui/common/CountdownOffer";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [overflow, setOverflow] = useState(false);
  const navConfig = [
    { title: "Web Hosting", notification: false, href: "#" },
    { title: "Cloud Hosting", notification: "On Sale", href: "#" },
    { title: "Vps Hosting", notification: false, href: "#" },
    { title: "Domain Checker", notification: false, href: "#" },
    { title: "Website Builder", notification: false, href: "#" }
  ];
  const featuresConfig = [
    { title: "Guranteed 99.9% Uptime", icon: "check" },
    { title: "Superior Speed Performance", icon: "check" },
    { title: "24/7 Support Chat", icon: "check" },
    { title: "30-Day Money-Back Guarantee", icon: "check" }
  ];
  const countdownOfferConfig = {
    title: "New Year Offer <span style='color:red'>82% OFF</span> Web Hosting",
    endDateInMilliseconds: 1632409882588,
    buttonText: "Get Started Now"
  };
  const subscriptionDiscountConfig = {
    tooltipText: "Save 82%",
    currency: "$",
    priceInt: "1",
    priceDecimal: "45",
    subscription: "/mo"
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const toggleOverflow = () => {
    const overflowCopy = overflow;
    setOverflow(!overflowCopy);
  };
  return (
    <div className="App">
      <Header navConfig={navConfig} toggleOverflow={() => toggleOverflow()} />
      {overflow && (
        <Overflow
          navConfig={navConfig}
          toggleOverflow={() => toggleOverflow()}
        />
      )}

      <div className="container paddingTop10">
        <div className="row">
          <CountdownOffer
            countdownOfferConfig={countdownOfferConfig}
            className="col-md column"
          />
          <SubscriptionDiscount
            subscriptionDiscountConfig={subscriptionDiscountConfig}
            className="col-md column"
          />
        </div>
      </div>

      <div className="container height7">
        <div className="row">
          <Features featuresConfig={featuresConfig} />
        </div>
      </div>
    </div>
  );
}

export default App;
