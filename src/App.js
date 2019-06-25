import React from 'react';
import './sass/style.scss';
//comp
import Header from './components/headerComponent/header';
import Banner from './components/bannerComponent/banner';

function App() {
  return (
    <div className="hostinger">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
