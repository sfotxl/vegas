import React from 'react';
import { Card } from 'react-bootstrap';
import { Col, Row, Container, CardImg, CardImgOverlay } from 'reactstrap';
import '../App.css';
import DesertImage from '../assets/desert.jpeg';

const EventCard = ({ event }) => {
  let background = 'bg-success';
  switch (event.date) {
    case '8.18.23':
      background = 'bg-success';
      break;
    case '8.19.23':
      background = 'bg-primary';
      break;
    case '8.20.23':
    default:
      background = 'bg-danger';
      break;
  }

  return (
    <Container id={event.id}>
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
      <Row className={background}>
        <Col
          xs={4}
          sm={4}
          className={'align-items-center text-light data' + background}
        >
          {/* <div className='title'>{event.name}</div> */}
          <div className='data'>Date: {event.date}</div>
          <div className='data'>Time: {event.time}</div>
        </Col>
        <Col xs={8} className={'d-flex text-light' + background}>
          <Row>
            <Col className='data text-light'>
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
        <Col xs={12} className={background}>
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
          <Col className={'description align-items-center ' + background}>
            <div className='text-light align-items-center'>
              {event.description}
            </div>
          </Col>
        </Row>
      ) : null}

      <Row className={'bottom1 ' + background}>
        <Col className='d-flex align-items-center'>
          <div>
            {event.address ? (
              <div className={'address text-info ' + background}>
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
        <Row className={background + ' bottom2'}>
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
