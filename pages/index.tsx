import About from '../features/about';
import Events from '../features/events';
import Hero from '../features/hero';
import Nav from '../features/nav';
import Rooms from '../features/rooms';

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Rooms />
      <Events />
    </div>
  );
};

export default Home;
