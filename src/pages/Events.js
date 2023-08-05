import Area15Image from '../assets/area15.jpeg';
import DragRaceImage from '../assets/drag-race-live.jpeg';
import ScarpettaImage from '../assets/scarpetta.jpeg';
import UbeFrenchImage from '../assets/ube-french.jpeg';
import SlotzImage from '../assets/slotz.jpeg';
import PoolImage from '../assets/pool.jpeg';
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
  },
  {
    id: 4,
    name: 'Pool',
    date: '8.18.23',
    time: 'All Day',
    image: PoolImage,
    location: 'p00l',
    cost: 'Free',
  },
  {
    id: 5,
    name: 'Dinner',
    date: '8.19.23',
    time: '17:00',
    image: SlotzImage,
    location: 'Fashion Mall LV',
    link: 'https://vegasexperience.com/fremont-zipline-slotzilla/?gad=1&gclid=Cj0KCQjw2qKmBhCfARIsAFy8buJXYvYGKWz5A_wVBYqgC5_-NTqHA9iXaFwWwGsYrzIV-gglSpy8Qy4aAjtcEALw_wcB',
    cost: '$49 / $69',
    google: 'https://goo.gl/maps/FVoTMofJFXyVXAyj8',
  },
  {
    id: 6,
    name: 'Drag Race Live',
    date: '8.19.23',
    time: '21:30',
    location: 'Flamingo Hotel',
    image: DragRaceImage,
    reservation: 7,
    cost: '$0',
    google: 'https://goo.gl/maps/kRAkYnj19zpP7AG46',
  },

  {
    id: 7,
    name: 'The Pepper Club',
    date: '8.29.23',
    time: '1:00pm',
    image: UbeFrenchImage,
    location: 'The English Hotel',
    link: 'https://www.thepepperclub.com/',
    address: '921 S Main St, Las Vegas, NV 89101',
    google: 'https://goo.gl/maps/EUpiUCeMmeQm3QRm8',
    cost: '$$',
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
