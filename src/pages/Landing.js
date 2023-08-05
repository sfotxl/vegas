import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, NavItem } from 'react-bootstrap';

const Landing = () => {
  return (
    <div className='center'>
      <Row>
        <Col>
          <nav>
            <NavItem>
              <Link to='/Events'>Events</Link>
            </NavItem>
            <NavItem>
              <Link to='/Hotels'>Hotels</Link>
            </NavItem>
          </nav>
        </Col>
      </Row>
    </div>
  );
};

export default Landing;
