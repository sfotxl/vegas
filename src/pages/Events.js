import Area15Image from '../assets/area15.jpeg';
import DragRaceImage from '../assets/drag-race-live.jpeg';
import ScarpettaImage from '../assets/scarpetta.jpeg';
import UbeFrenchImage from '../assets/ube-french.jpeg';
import SlotzImage from '../assets/slotz.jpeg';
import PoolImage from '../assets/pool.jpeg';
import GamblingImage from '../assets/gambling.jpeg';
import GalpaoImage from '../assets/galpao.jpeg';
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
    description: 'Admission is free. I need to go here for my Art.',
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
    description: 'Calling this my birthday dinner.',
  },
  {
    id: 3,
    name: 'Slotzilla Zipline',
    date: '8.18.23',
    time: '13:00',
    image: SlotzImage,
    location: 'Downtown LV',
    link: 'https://vegasexperience.com/fremont-zipline-slotzilla/?gad=1&gclid=Cj0KCQjw2qKmBhCfARIsAFy8buJXYvYGKWz5A_wVBYqgC5_-NTqHA9iXaFwWwGsYrzIV-gglSpy8Qy4aAjtcEALw_wcB',
    cost: '$49 / $69',
    google: 'https://goo.gl/maps/NQ6H79enfxa41V779',
    address: '425 E Fremont St #160, Las Vegas, NV 89101',
    description: 'Option 1: normal zipline posture || Option 2: Superman',
  },
  {
    id: 4,
    name: 'Pool',
    date: '8.19.23',
    time: 'All Day',
    image: PoolImage,
    location: 'p00l',
    cost: 'Free',
    description: 'Spritz in the desert. Ride a block of ice. Nachos.',
  },
  {
    id: 5,
    name: 'Gamble',
    date: '8.19.23',
    time: 'All Day',
    image: GamblingImage,
    location: 'Da Kasino',
    cost: 'Free',
    description: `It's only a gambling problem if you're losing.`,
  },
  {
    id: 6,
    name: 'Galpao Gauchos',
    date: '8.19.23',
    time: '19:00',
    image: GalpaoImage,
    location: 'Fashion Mall LV',
    link: 'https://vegasexperience.com/fremont-zipline-slotzilla/?gad=1&gclid=Cj0KCQjw2qKmBhCfARIsAFy8buJXYvYGKWz5A_wVBYqgC5_-NTqHA9iXaFwWwGsYrzIV-gglSpy8Qy4aAjtcEALw_wcB',
    cost: '$49 / $69',
    google: 'https://goo.gl/maps/FVoTMofJFXyVXAyj8',
    address: '3200 S Las Vegas Blvd Suite 1260,Las Vegas, NV 89109',
    description: `Brazilian steakhouse cos it's basically a buffet.`,
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
    description: 'Men in wigs.',
  },

  {
    id: 8,
    name: 'The Pepper Club',
    date: '8.29.23',
    time: '1:00pm',
    image: UbeFrenchImage,
    location: 'The English Hotel',
    link: 'https://www.thepepperclub.com/',
    address: '921 S Main St, Las Vegas, NV 89101',
    google: 'https://goo.gl/maps/EUpiUCeMmeQm3QRm8',
    cost: '$$',
    description: 'Asian-inspired brunch means Ube French Toast.',
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
