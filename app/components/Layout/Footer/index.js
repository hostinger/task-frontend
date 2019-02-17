/**
 *
 * Footer
 *
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import './style/style.scss';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm>
            <FontAwesomeIcon icon={faCheck} className="icon" /> Guaranteed 99.9%
            Uptime
          </Col>
          <Col sm>
            <FontAwesomeIcon icon={faCheck} className="icon" />
            Superior Speed Performance
          </Col>
          <Col sm>
            <FontAwesomeIcon icon={faCheck} className="icon" />
            24/7 Support Chat
          </Col>
          <Col sm>
            <FontAwesomeIcon icon={faCheck} className="icon" />
            30-Day Money-Back Guarantee
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
