import React from 'react';
import { Card } from 'react-bootstrap';
import { Col, Row, Container } from 'reactstrap';
import '../App.css';

const EventCard = ({ event }) => {
  return (
    <Container>
      <Row className='text-dark'>
        <Col xs={12}>
          <div className='title'>{event.name}</div>
        </Col>
      </Row>
      <hr />
      <Row className='bg-success'>
        <Col
          xs={4}
          sm={4}
          className='align-items-center bg-success text-light data'
        >
          {/* <div className='title'>{event.name}</div> */}
          <div className='data'>Date: {event.date}</div>
          <div className='data'>Time: {event.time}</div>
        </Col>
        <Col
          xs={8}
          className='bg-success d-flex
          align-items-center text-light'
        >
          <div>
            <div className='data'>Location: {event.location}</div>
            <div className='data'>Cost: {event.cost}</div>
            {event.reservation ? (
              <div className='data'>Reservation: {event.reservation}</div>
            ) : null}
          </div>
        </Col>
      </Row>
      <Row className='address bg-success'>
        <Col xs={12} sm={8}>
          <Card className='bg-info text-dark card'>
            <Card.Img
              variant='top'
              src={event.image}
              // width='100%'
              height='100%'
              text={event.name}
            />
          </Card>
        </Col>
      </Row>

      <Row className='bg-success bottom1'>
        <Col className='d-flex align-items-center'>
          <div>
            {event.address ? (
              <div className='address text-info'>
                Directions to:{' '}
                <a href={event.google} class='link-light'>
                  {event.address}
                </a>
              </div>
            ) : null}
          </div>
        </Col>
      </Row>
      {event.link ? (
        <Row className='bg-success bottom2'>
          <Col>
            <a href={event.link} class='link-info address'>
              More info
            </a>
          </Col>
        </Row>
      ) : null}
      <hr />
    </Container>
  );
};

export default EventCard;
