/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Countdown from './countdown';
import Discount from './discount';
import './style/style.scss';
export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={4} className="left_col">
              <h4>New Year Offer</h4>
              <h4>
                <span id="discount">82% OFF </span>
                Web Hosting
              </h4>

              <Countdown />
              <Button id="custom_btn" variant="danger">
                get started now
              </Button>
            </Col>
            <Col md={{ span: 4, offset: 4 }} className="right_col">
              <Discount />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
