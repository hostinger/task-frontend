/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import style from './style.scss';
import NavMenu from '../../components/Navigation/Menus/Loadable';
import { brand, menu } from '../MockData/MenuData';
// import BigPrice from '../../components/DataDisplay/BigPrice/Loadable';

export default function App() {
  return (
    <div>
      <div className={`${style.content} container`}>
        <NavMenu className={style.navigation} brand={brand} menuList={menu} />
      </div>
      <div className={`${style.bg} `}>
        <div className={`${style.reverse} container`}>
          <div className={`${style.body}`}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
            <GlobalStyle />
          </div>
        </div>
      </div>
    </div>
  );
}
