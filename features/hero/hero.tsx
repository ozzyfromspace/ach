import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MOBITABLET_MEDIA_QUERY } from '../../constants';
import HeroCarousel from '../heroCarousel';

const Hero = () => {
  const isMobile = useMediaQuery({ query: MOBITABLET_MEDIA_QUERY });
  const [mobile, setMobile] = useState(() => false);
  const [isFirstRender, setisFirstRender] = useState(() => true);

  useEffect(() => {
    setMobile(() => isMobile);
  }, [isMobile]);

  useEffect(() => {
    setisFirstRender(() => false);
  }, []);

  return (
    <main className="relative w-full h-[calc(100vh-5rem)] mt-20" id="hero">
      <div className="h-full w-full flex justify-center items-center">
        <HeroCarousel />
      </div>
    </main>
  );
};

export default Hero;
