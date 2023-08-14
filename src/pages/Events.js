import Area15Image from '../assets/meow.gif';
import DragRaceImage from '../assets/dragrace.gif';
import ScarpettaImage from '../assets/scarp.gif';
import UbeFrenchImage from '../assets/ube-french.jpeg';
import SlotzImage from '../assets/zipline.gif';
import PoolImage from '../assets/pool.gif';
// import GamblingImage from '../assets/gambling.jpeg';
import NYNYImage from '../assets/NYNY.gif';
import CasinoGif from '../assets/casino.gif';
import GalpaoImage from '../assets/brazilian.gif';
import SphereImage from '../assets/sphere.gif';
import PsychicImage from '../assets/psychic.gif';
import SlotImage from '../assets/bellagio.gif';
import VegasImage from '../assets/happens-in-vegas.png';
import EventCard from '../components/EventCard';
import Header from '../components/Header';
import { Container, Row, Col } from 'reactstrap';
import { DesertHeader } from '../components/EventCard';

const EVENTLIST = [
  {
    id: 1,
    name: 'Area 15',
    date: '8.18.23',
    time: '13:00',
    image: Area15Image,
    location: 'Area 15',
    address: '3215 S Rancho Dr, Las Vegas, NV 89102',
    link: 'http://area15.com/',
    cost: '~$50',
    google: 'https://goo.gl/maps/zCzANQxm8fv5Sw1y9',
    description:
      'This is a large complex featuring VR, thrill rides, music, and interactive art. Admission is free to the building, but doing things once inside might carry a price. ',
  },
  {
    id: 2,
    name: 'Scarpetta',
    date: '8.18.23',
    time: '18:00',
    image: ScarpettaImage,
    location: 'The Cosmopolitan',
    link: 'https://www.cosmopolitanlasvegas.com/restaurants/scarpetta',
    reservation: 9,
    cost: '$$$',
    address:
      'Boulevard Tower, 3708 Las Vegas Blvd S Level 3, Las Vegas, NV 89109',
    google: 'https://goo.gl/maps/grCV8vn8o9UAgWsH9',
    description:
      'This is my birthday dinner. If you cannot make it to this for whatever reason please let me know before Wednesday, August 9.',
  },
  {
    id: 3,
    name: 'Group Slot Pull',
    date: '8.18.23',
    time: '20:30',
    location: 'Bellagio',
    cost: 'variable / $100',
    image: SlotImage,
    link: 'https://youtube.com/shorts/S6n6d0-WrrA?feature=share',
    google: 'https://goo.gl/maps/2QAEP9UCv6TSnr1p8',
    description: `We're pooling our money to bet the maximum on a high-end slot machine.  Either we can all contribute the same, or divy up any winnings based on how much a person gives.  Let's start the trip *correct*!`,
  },
  {
    id: 4,
    name: 'Big Apple Coaster',
    date: '8.18.23',
    time: '21:00',
    location: 'New York, New York',
    image: NYNYImage,
    cost: '$25',
    google: 'https://goo.gl/maps/QyRvjXmVBwBS8SBg8',
    address: '3790 S Las Vegas Blvd, Las Vegas, NV 89109',
    link: 'https://newyorknewyork.mgmresorts.com/en/entertainment/the-big-apple-coaster-and-arcade.html',
    description:
      'Roller coaster. The adrenaline will be nice if we lose in the slot pull.',
  },
  {
    id: 5,
    name: 'Pool',
    date: '8.19.23',
    time: 'All Day',
    image: PoolImage,
    location: 'The pool',
    cost: 'Free',
    description:
      'Since we are all at different hotels, I do not have a particular pool in mind. Pool at the MGM Grand looks superb, though! This is free time to do whatever.',
  },
  {
    id: 6,
    name: 'Gamble',
    date: '8.19.23',
    time: 'All Day',
    image: CasinoGif,
    location: 'The casino',
    cost: 'UwU',
    description: `Gamble at the slots, gamble at the tables, drink in the casino. I want to gamble at the Paris casino. Enjoy the sights.`,
  },
  {
    id: 7,
    name: 'Galpao Gauchos',
    date: '8.19.23',
    time: '19:00',
    image: GalpaoImage,
    location: 'Fashion Mall LV',
    link: 'https://vegasexperience.com/fremont-zipline-slotzilla/?gad=1&gclid=Cj0KCQjw2qKmBhCfARIsAFy8buJXYvYGKWz5A_wVBYqgC5_-NTqHA9iXaFwWwGsYrzIV-gglSpy8Qy4aAjtcEALw_wcB',
    cost: '$$',
    google: 'https://goo.gl/maps/FVoTMofJFXyVXAyj8',
    address: '3200 S Las Vegas Blvd Suite 1260, Las Vegas, NV 89109',
    description: `Brazilian steakhouse cos it's basically a buffet. Please RSVP by Wednesday, August 9, so we can make reservations. `,
  },
  {
    id: 8,
    name: 'Drag Race Live',
    date: '8.19.23',
    time: '21:30',
    location: 'The Flamingo',
    image: DragRaceImage,
    reservation: 7,
    cost: '$0',
    google: 'https://goo.gl/maps/kRAkYnj19zpP7AG46',
    address: '3555 S Las Vegas Blvd, Las Vegas, NV 89109',
    link: 'https://get.rupaulsdragracelive.com/',
    description:
      'Men in wigs. We have the tickets for Kayla, Keola, Kyle, Jordan, Xander, Travis, and Kalani. Additional tickets can be purchased on the site below.',
  },
  {
    id: 9,
    name: 'The Sphere',
    date: '8.19.23',
    time: '23:30',
    location: 'MSG Sphere',
    cost: 'Free',
    image: SphereImage,
    link: 'https://twitter.com/SphereVegas',
    address: 'Sphere, 255 Sands Ave, Las Vegas, NV 89169',
    google: 'https://goo.gl/maps/EYRaLRp1zXfFZUWBA',
    description: `It's not open yet, but let's go look at it!!!!`,
  },
  {
    id: 10,
    name: 'Slotzilla Zipline',
    date: '8.20.23',
    time: '00:30',
    image: SlotzImage,
    location: 'Downtown LV',
    link: 'https://vegasexperience.com/fremont-zipline-slotzilla/?gad=1&gclid=Cj0KCQjw2qKmBhCfARIsAFy8buJXYvYGKWz5A_wVBYqgC5_-NTqHA9iXaFwWwGsYrzIV-gglSpy8Qy4aAjtcEALw_wcB',
    cost: '$49 / $69',
    google: 'https://goo.gl/maps/NQ6H79enfxa41V779',
    address: '425 E Fremont St #160, Las Vegas, NV 89101',
    description:
      'Option 1: normal zipline posture || Option 2: Superman. Reservations are recommended, so I will make reservations Wednesday, August 9',
  },
  {
    id: 11,
    name: 'The Pepper Club',
    date: '8.20.23',
    time: '11:00',
    image: UbeFrenchImage,
    location: 'The English Hotel',
    link: 'https://www.thepepperclub.com/',
    address: '921 S Main St, Las Vegas, NV 89101',
    google: 'https://goo.gl/maps/EUpiUCeMmeQm3QRm8',
    cost: '$$',
    reservation: 6,
    description:
      'Asian-inspired brunch means Ube French Toast. The reservation is currently for six, but we can add more, if needed.',
  },
  {
    id: 12,
    name: 'Psychic',
    date: '8.20.23',
    time: '13:30',
    image: PsychicImage,
    location: 'Psychic Eye Book Store',
    link: 'https://pebooksandgifts.com/',
    address: '6848 W Charleston Blvd, Las Vegas, NV 89117',
    google: 'https://goo.gl/maps/qtpHyA5SXZ4Jvwqq9',
    description: 'Spooky ooky kooky psychic reading in the desert.',
  },
];

const list = EVENTLIST.map((event) => <EventCard event={event} />);

const Events = () => {
  return (
    <>
      <Header />
      <div className='keepinmind'>
        <a href='#Keep'>Things to keep in mind</a>
      </div>
      {list}
      <div id='Keep'>
        <Container className='bg-info'>
          {/* <Row className={background}>
            <Col className='banner' xs={12}>
              <Card className='text-center'>
                <CardImg width='100%' src={DesertImage} alt='desert' />
                <CardImgOverlay className='eventHead text-light'>
                  {event.name}
                </CardImgOverlay>
              </Card>
            </Col>
          </Row> */}
          <Row>
            <Col>
              <DesertHeader event={{ name: 'Things To Keep In Mind' }} />
              <div className='map'>
                <iframe
                  title='map'
                  src='https://www.google.com/maps/d/embed?mid=19PQIjP5zqCmIwjKR0EMIm4V5jyVOrBw&ehbc=2E312F'
                  width='100%'
                  height='400'
                ></iframe>
              </div>
              <div className='text-light keepbody'>Remember:</div>
              <div className='keepinmind'>
                <img src={VegasImage} width='100%' alt='vegas' />
                <br />
              </div>
              <div>
                <div className='text-light'>
                  If you find yourself in jail, the person to call is Kyle.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Events;
