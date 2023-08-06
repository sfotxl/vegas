import React from 'react';
import { Card } from 'react-bootstrap';
import { Col, Row, Container, CardImg, CardImgOverlay } from 'reactstrap';
import '../App.css';
import DesertImage from '../assets/desert.jpeg';

const EventCard = ({ event }) => {
  return (
    <Container>
      <Row className='text-dark'>
        <Col xs={12}>
          <Card className='text-center'>
            <CardImg width='100%' src={DesertImage} alt='desert' />
            <CardImgOverlay className='eventHead text-light'>
              {event.name}
            </CardImgOverlay>
          </Card>
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
       text-light'
        >
          <Row>
            <Col className='data'>
              Location: {event.location}
              <div>Cost: {event.cost}</div>
            </Col>
            {event.reservation ? (
              <Col className='data'>Reservation: {event.reservation}</Col>
            ) : null}
          </Row>
        </Col>
      </Row>
      <Row className='address bg-success'>
        <Col xs={12}>
          {/* <Card className='bg-info text-dark card'>
            <Card.Img
              variant='top'
              src={event.image}
              height='100%'
              text={event.name}
            />
          </Card> */}
          <img src={event.image} alt={event.name} width='100%' />
        </Col>
      </Row>
      {event.description ? (
        <Row className='justify-content-center'>
          <Col className='bg-success description align-items-center'>
            <div className='text-light align-items-center'>
              {event.description}
            </div>
          </Col>
        </Row>
      ) : null}

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
