import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MOBITABLET_MEDIA_QUERY } from '../../constants';
import ach from '../../public/ach-leftcrop.jpg';
import courtStreet from '../../public/court-street.jpeg';
import Button from '../button';

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

  const buttonClasses = mobile ? '' : 'w-1/3 max-w-sm mt-9';

  return (
    <main
      className="relative z-0 w-full min-h-[88vh] flex flex-col justify-start bg-gray-light"
      id="hero"
    >
      <div className="hidden mt:block absolute z-0 top-0 left-0 right-0 bottom-0 overflow-hidden">
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-[hsla(0,0%,100%,93%)] opacity-[0.91] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 shadow-sm"></div>
        {/* <div className="absolute z-10 top-0 left-0 w-full h-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 shadow-sm"></div> */}
        {/* <div className="absolute z-10 top-0 left-0 w-full h-full opacity-[0.91] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 shadow-sm"></div> */}
        <Image
          src={courtStreet}
          alt=""
          fill
          className="z-0 object-cover grayscale-[40%] brightness-125 mt:scale-105 md:scale-110 lg:scale-125 xl:scale-150"
        />
      </div>
      <section className="relative z-10 pt-[8.4rem] mt:pt-[7.9rem] lg:pt-[6.5rem] xl:pb-[3.3rem] sm:pb-14 w-full max-w-5xl mx-auto flex flex-col justify-center items-center">
        <motion.h1
          variants={variants}
          initial="initial"
          animate="animate"
          className="font-title font-black tracking-wide text-[2rem] sm:text-[2.3rem] mt:text-[2.4rem] md:text-[2.5rem] lg:text-[2.65rem] xl:text-[2.9rem] cursor-default text-center mb-[0.3rem] text-blue-deep"
        >
          Athens Central Hotel
        </motion.h1>
        <motion.h2
          variants={variants}
          initial="initial"
          animate="animate"
          className="font-subtitle font-normal cursor-default text-base sm:text-[1.05rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.25rem] text-center text-gray-link tracking-wide"
        >
          A{' '}
          <span className="text-[hsl(348,100%,71%)] font-semibold">
            hidden gem
          </span>{' '}
          in the heart of Athens, OH
        </motion.h2>
        {!isFirstRender && (
          <Button
            label="Reserve a room"
            full={mobile}
            fixed={mobile}
            className={`text-xl sm:text-lg h-12 ${buttonClasses}`}
          />
        )}
      </section>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="mt-[2.4rem] mt:mt-0 relative h-[43vh] mt:h-[55vh] md:h-[64vh] min-w-fit min-h-[9em] max-h-[28rem] xl:rounded-t-md overflow-hidden"
      >
        <Image
          src={ach}
          alt=""
          fill
          className="object-cover max-w-5xl top-0 mx-auto grayscale-[38%] brightness-[1.2] saturate-[1.13] sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl"
        />
      </motion.div>
    </main>
  );
};

export default Hero;

const variants: Variants = {
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
