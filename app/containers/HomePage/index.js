/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import './style/style.scss';
import Container from 'react-bootstrap/Container';
import Featured from '../../components/Featured';
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="bg" />
        <div className="content">
          <Container fluid>
            <Featured />
          </Container>
        </div>
      </div>
    );
  }
}
