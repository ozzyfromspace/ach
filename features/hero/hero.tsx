import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link as ReactScrollLink } from 'react-scroll';
import { MOBITABLET_MEDIA_QUERY } from '../../constants';
import courtStreet from '../../public/court-street.jpeg';
import Button from '../button';
import HeroCarousel from '../heroCarousel';

const Hero = () => {
  const isMobile = useMediaQuery({ query: MOBITABLET_MEDIA_QUERY });
  const [mobile, setMobile] = useState(() => false);
  const [isFirstRender, setisFirstRender] = useState(() => true);
  const buttonClasses = mobile ? '' : 'w-1/3 max-w-sm mt-9';

  useEffect(() => {
    setMobile(() => isMobile);
  }, [isMobile]);

  useEffect(() => {
    setisFirstRender(() => false);
  }, []);

  return (
    <main className="relative w-full mt-20" id="hero">
      <SiteBG />
      <div className="w-full flex flex-col justify-start items-center gap-16 mx-auto px-6 pb-1 mb-6 overflow-hidden">
        <Pitch
          mobile={mobile}
          isFirstRender={isFirstRender}
          buttonClasses={buttonClasses}
        />
        <HeroCarousel />
      </div>
    </main>
  );
};

interface PitchProps {
  mobile: boolean;
  isFirstRender: boolean;
  buttonClasses: string;
}

const Pitch = (props: PitchProps) => (
  <section className="relative max-w-5xl mx-auto flex flex-col justify-center items-center mt-8">
    <motion.h1
      variants={pitchVariants}
      initial="initial"
      animate="animate"
      className="font-title font-medium tracking-wide text-[2rem] sm:text-[2.3rem] mt:text-[2.4rem] md:text-[2.5rem] lg:text-[2.65rem] xl:text-[2.9rem] cursor-default text-center mb-[0.3rem] text-blue-deep"
    >
      Athens Central Hotel
    </motion.h1>
    <motion.h2
      variants={pitchVariants}
      initial="initial"
      animate="animate"
      className="font-subtitle font-normal cursor-default text-base sm:text-[1.05rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.25rem] text-center text-gray-link tracking-wide"
    >
      A{' '}
      <button>
        <ReactScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={350}
        >
          <span className="text-[hsl(145,55%,41%)] font-semibold">
            hidden gem
          </span>
        </ReactScrollLink>
      </button>{' '}
      in the heart of Athens, OH
    </motion.h2>
    {!props.isFirstRender && (
      <Button
        label="Reserve a room"
        full={props.mobile}
        fixed={props.mobile}
        className={`text-xl sm:text-lg h-12 ${props.buttonClasses}`}
      />
    )}
  </section>
);

const pitchVariants: Variants = {
  initial: {
    y: '-2.5px',
    opacity: 0.2,
    scale: 0.97,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const SiteBG = () => (
  <React.Fragment>
    <div className="fixed -z-[5] top-0 left-0 bottom-0 right-0 bg-[hsla(0,0%,100%,100%)] opacity-[0.93] bg-clip-padding backdrop-filter backdrop-blur-xl shadow-sm"></div>
    <div className="fixed -z-10 top-0 left-0 bottom-0 right-0">
      <Image
        src={courtStreet}
        placeholder="blur"
        priority={true}
        alt=""
        sizes="(min-width: 0px) 100vw"
        fill
        className="z-0 object-cover grayscale-[40%] brightness-125 mt:scale-105 md:scale-110 lg:scale-125 xl:scale-150"
      />
    </div>
  </React.Fragment>
);

export default Hero;
