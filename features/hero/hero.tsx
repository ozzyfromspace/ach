import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MOBITABLET_MEDIA_QUERY } from '../../constants';
import courtStreet from '../../public/court-street.jpeg';
import Button from '../button';
import HeroCarousel from '../heroCarousel';

const Hero = () => {
  const isMobile = useMediaQuery({ query: MOBITABLET_MEDIA_QUERY });
  const [mobile, setMobile] = useState(() => false);
  const [isFirstRender, setisFirstRender] = useState(() => true);
  const buttonClasses = mobile ? '' : 'w-1/3 max-w-sm';

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
  <section className="relative max-w-5xl mx-auto flex flex-col justify-center items-center mt-12 md:mt-10 gap-1">
    <motion.h1
      variants={pitchVariants}
      initial="initial"
      animate="animate"
      className="font-title font-light tracking-wide text-[2rem] sm:text-[2.3rem] mt:text-[2.4rem] md:text-[2.5rem] lg:text-[2.65rem] xl:text-[2.9rem] cursor-default text-center mb-[0.3rem] text-blue-deep"
    >
      Athens Central Hotel
    </motion.h1>
    <motion.h2
      variants={pitchVariants}
      initial="initial"
      animate="animate"
      className="font-subtitle font-normal cursor-default text-base sm:text-[1.05rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.25rem] text-center text-gray-link tracking-wide mt-1 mt:mt-0"
    >
      A <span className="text-blue-deep font-bold">hidden gem</span> in the
      heart of Athens, OH
    </motion.h2>
    {!props.isFirstRender && (
      <div className="flex justify-center items-center gap-6 mt-7">
        {!props.mobile && (
          <button className="flex justify-center items-center gap-1 min-w-max font-subtitle font-medium tracking-wide p-2 pl-6 pr-6 w-1/3 max-w-sm text-xl sm:text-lg bg-[white] text-gray-link border-[1px] border-[hsl(0,0%,84%,100%)] rounded-[0.25rem] hover:scale-[0.989] hover:bg-[hsla(0,0%,0%,84%,84%)] duration-150 ease-out transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <a href="tel:+12202211795">2202211795</a>
          </button>
        )}
        <Button
          label="Book a room"
          full={props.mobile}
          fixed={props.mobile}
          className={`text-xl sm:text-lg ${props.buttonClasses}`}
        />
      </div>
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
