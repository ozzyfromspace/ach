import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TABLET_MEDIA_QUERY } from '../../constants';
import courtStreet from '../../public/court-street.jpeg';
import Button, { CallButton } from '../button';
import { useFocusedSection } from '../focusedSectionProvider/FocusedSectionProvider';
import HeroCarousel from '../heroCarousel';

interface HeroProps {
  aboutInView: boolean;
}

const Hero = (props: HeroProps) => {
  const { aboutInView } = props;
  const isMobile = useMediaQuery({ query: TABLET_MEDIA_QUERY });
  const [isFirstRender, setisFirstRender] = useState(() => true);
  const buttonClasses = isFirstRender ? '' : isMobile ? '' : 'w-1/3 max-w-sm';
  const {
    refs: { Home: home },
  } = useFocusedSection();

  useEffect(() => {
    setisFirstRender(() => false);
  }, []);

  return (
    <main ref={home.ref} className="relative w-full mt-20" id="hero">
      <SiteBG />
      <motion.div
        className="w-full flex flex-col justify-start items-center gap-10 mt:gap-14 md:gap-16 mx-auto px-6 overflow-hidden"
        layout
      >
        <Pitch
          mobile={isMobile}
          isFirstRender={isFirstRender}
          buttonClasses={buttonClasses}
          aboutInView={aboutInView}
        />
        <HeroCarousel hints={false} />
      </motion.div>
    </main>
  );
};

interface PitchProps {
  mobile: boolean;
  isFirstRender: boolean;
  buttonClasses: string;
  aboutInView: boolean;
}

const Pitch = (props: PitchProps) => (
  <section className="relative cursor-default max-w-5xl mx-auto flex flex-col justify-center items-center mt-12 md:mt-10 gap-1">
    <h1 className="font-title font-normal uppercase tracking-wide text-[1.94rem] sm:text-[2.3rem] mt:text-[2.38rem] md:text-[2.5rem] lg:text-[2.58rem] xl:text-[2.69rem] cursor-default text-center mb-[0.3rem] text-blue-deep">
      Athens Central Hotel
    </h1>
    <h2 className="font-subtitle font-normal cursor-default text-base sm:text-[1.05rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.25rem] text-center text-gray-link tracking-wide mt-1 mt:mt-0">
      The most luxurious boutique hotel in Athens, OH
    </h2>
    {props.isFirstRender && <div className="h-7 w-1"></div>}
    {!props.isFirstRender && props.mobile && (
      <Button
        label="Book a room"
        full={true}
        fixed={true}
        hideMobileButton={props.aboutInView}
        className={`select-none text-xl sm:text-lg ${props.buttonClasses}`}
      />
    )}
    {!props.isFirstRender && !props.mobile && (
      <motion.div
        className="flex justify-center items-center gap-6 mt-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.22 } }}
      >
        <CallButton />
        <a
          href="https://hotels.cloudbeds.com/reservation/iyXSJl"
          tabIndex={-1}
          aria-label="Book Now"
        >
          <Button
            label="Book a room"
            full={false}
            fixed={false}
            hideMobileButton={false}
            className={`select-none text-xl sm:text-lg ${props.buttonClasses}`}
          />
        </a>
      </motion.div>
    )}
  </section>
);

const SiteBG = () => (
  <React.Fragment>
    <div className="fixed -z-[5] top-0 left-0 bottom-0 right-0 bg-[hsl(49,36%,96%)] opacity-[0.931] bg-clip-padding backdrop-filter backdrop-blur-xl shadow-sm"></div>
    <div className="fixed -z-10 top-0 left-0 bottom-0 right-0">
      <Image
        src={courtStreet}
        placeholder="blur"
        priority={false}
        quality={25}
        alt=""
        sizes="(min-width: 0px) 100vw"
        fill
        className="z-0 object-cover grayscale-[40%] brightness-125 mt:scale-105 md:scale-110 lg:scale-125 xl:scale-150"
      />
    </div>
  </React.Fragment>
);

export default Hero;
