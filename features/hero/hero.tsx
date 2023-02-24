import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TABLET_MEDIA_QUERY } from '../../constants';
import courtStreet from '../../public/court-street.jpeg';
import Button, { CallButton } from '../button';
import { useFocusedSection } from '../focusedSectionProvider/FocusedSectionProvider';
import HeroCarousel from '../heroCarousel';
import StarDiv from '../stardiv/StarDiv';

interface HeroProps {
  aboutInView: boolean;
  ads: boolean;
}

const Hero = (props: HeroProps) => {
  const { aboutInView, ads } = props;
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
    <main
      ref={home.ref}
      className="relative w-full overflow-clip mt-20"
      id="hero"
    >
      <SiteBG />
      <motion.div
        className="w-full flex flex-col justify-start items-center gap-10 mt:gap-14 md:gap-16 mx-auto overflow-hidden"
        layout
      >
        <Pitch
          mobile={isMobile}
          isFirstRender={isFirstRender}
          buttonClasses={buttonClasses}
          aboutInView={aboutInView}
          ads={ads}
        />
        {ads && (
          <MobileAds
            isFirstRender={isFirstRender}
            mobile={isMobile}
            ads={ads}
          />
        )}
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
  ads: boolean;
}

interface MobileAdsProps {
  isFirstRender: boolean;
  mobile: boolean;
  ads: boolean;
}

const MobileAds = (props: MobileAdsProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {!props.isFirstRender && props.mobile && props.ads && (
        <div className="flex items-center justify-between mr-5">
          <div className="max-w-[18rem]">
            <div className="overflow-hidden w-[130px] aspect-square">
              <iframe
                className="select-none scale-75"
                aria-label="a booking.com rating point card"
                referrerPolicy="no-referrer"
                src="https://badge.hotelstatic.com/?position=inline&amp;clickable=true&amp;url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fus%2Fathens-central.html"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-[8rem] mr-10">
            <StarDiv>
              <p className="text-center font-medium text-white text-sm">
                The only 4 star hotel in Athens
              </p>
            </StarDiv>
          </div>
        </div>
      )}
    </div>
  );
};

const Pitch = (props: PitchProps) => (
  <div className={`w-full mx-auto ${props.ads ? '-mt-[1.5rem]' : ''}`}>
    {!props.isFirstRender && !props.mobile && props.ads && (
      <div>
        <div className="flex flex-col gap-3 absolute bottom-[65%] right-16 max-w-[8rem]">
          <StarDiv>
            <p className="text-center font-medium text-white text-sm">
              The only 4 star hotel in Athens
            </p>
          </StarDiv>
        </div>
        <div className="max-w-[18rem] absolute bottom-[60%]">
          <div className="overflow-hidden w-[130px] aspect-square">
            <iframe
              className="select-none scale-75"
              aria-label="a booking.com rating point card"
              referrerPolicy="no-referrer"
              src="https://badge.hotelstatic.com/?position=inline&amp;clickable=true&amp;url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fus%2Fathens-central.html"
            ></iframe>
          </div>
        </div>
      </div>
    )}
    <section className="relative cursor-default max-w-5xl mx-auto flex flex-col justify-center items-center mt-12 md:mt-10 gap-1">
      <h1 className="px-6 font-title font-normal uppercase tracking-wide text-[1.94rem] sm:text-[2.3rem] mt:text-[2.38rem] md:text-[2.5rem] lg:text-[2.58rem] xl:text-[2.69rem] cursor-default text-center mb-[0.3rem] text-blue-deep">
        Athens Central Hotel
      </h1>
      <h2 className="px-6 font-subtitle font-normal cursor-default text-[1.125rem] lg:text-[1.2rem] xl:text-[1.25rem] text-center text-gray-link tracking-wide mt-1 mt:mt-0">
        The most luxurious hotel in Athens, OH
        {props.ads ? ' and the closest to uptown and OU' : ''}
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
  </div>
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
