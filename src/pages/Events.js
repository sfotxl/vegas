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
import EventCard from '../components/EventCard';
import Header from '../components/Header';

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
    name: 'Slotzilla Zipline',
    date: '8.18.23',
    time: '22:00',
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
    id: 4,
    name: 'Pool',
    date: '8.19.23',
    time: 'All Day',
    image: PoolImage,
    location: 'The pool',
    cost: 'Free',
    description:
      'Since we are all at different hotels, I do not have a particular pool in mind. This is free time to do whatever.',
  },
  {
    id: 5,
    name: 'Gamble',
    date: '8.19.23',
    time: 'All Day',
    image: CasinoGif,
    location: 'The casino',
    cost: 'Free',
    description: `This is a placeholder. Gamble or pool. Enjoy the sights.`,
  },
  {
    id: 6,
    name: 'Galpao Gauchos',
    date: '8.19.23',
    time: '19:00',
    image: GalpaoImage,
    location: 'Fashion Mall LV',
    link: 'https://vegasexperience.com/fremont-zipline-slotzilla/?gad=1&gclid=Cj0KCQjw2qKmBhCfARIsAFy8buJXYvYGKWz5A_wVBYqgC5_-NTqHA9iXaFwWwGsYrzIV-gglSpy8Qy4aAjtcEALw_wcB',
    cost: '$$',
    google: 'https://goo.gl/maps/FVoTMofJFXyVXAyj8',
    address: '3200 S Las Vegas Blvd Suite 1260,Las Vegas, NV 89109',
    description: `Brazilian steakhouse cos it's basically a buffet. Please RSVP by Wednesday, August 9, so we can make reservations. `,
  },
  {
    id: 7,
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
    id: 8,
    name: 'Big Apple Coaster',
    date: '8.19.23',
    time: '23:30',
    location: 'New York, New York',
    image: NYNYImage,
    cost: '$25',
    google: 'https://goo.gl/maps/QyRvjXmVBwBS8SBg8',
    address: '3555 S Las Vegas Blvd, Las Vegas, NV 89109',
    link: 'https://newyorknewyork.mgmresorts.com/en/entertainment/the-big-apple-coaster-and-arcade.html',
    description: 'Roller coaster.',
  },
  {
    id: 9,
    name: 'The Pepper Club',
    date: '8.20.23',
    time: '11:00',
    image: UbeFrenchImage,
    location: 'The English Hotel',
    link: 'https://www.thepepperclub.com/',
    address: '921 S Main St, Las Vegas, NV 89101',
    google: 'https://goo.gl/maps/EUpiUCeMmeQm3QRm8',
    cost: '$$',
    description:
      'Asian-inspired brunch means Ube French Toast. Please reach out by Wednesday, August 9, so we can make a reservation.',
  },
];

const list = EVENTLIST.map((event) => <EventCard event={event} />);

const Events = () => {
  return (
    <>
      <Header />
      {list}
    </>
  );
};

export default Events;
