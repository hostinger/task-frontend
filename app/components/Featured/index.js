/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Countdown from './countdown';
import Discount from './discount';
import './style/style.scss';
export default class index extends PureComponent {
  state = {
    discountStart: 0,
    discountEnd: 82,
  };

  porcentange = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1,
      });
    }
  };

  componentDidMount() {
    this.porcentange();
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentange();
    }, 10);
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} sm={12} md={4} className="left_col">
              <h4>New Year Offer</h4>
              <h4>
                <span id="discount">{this.state.discountStart}% OFF </span>
                Web Hosting
              </h4>
              <Countdown />
              <Button id="custom_btn" variant="danger">
                get started now
              </Button>
            </Col>
            <Col xs={12} sm={12} md={4} />
            <Col xs={12} sm={12} md={4} className="right_col">
              <Discount discount={this.state.discountStart} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
