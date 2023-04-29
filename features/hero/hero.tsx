import { createClient } from 'contentful';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { memo, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TABLET_MEDIA_QUERY, bookingLink } from '../../constants';
import Button, { CallButton } from '../button';
import HeroCarousel, { ImageData } from '../heroCarousel/HeroCarousel';
import StarDiv from '../stardiv/StarDiv';

export interface HeroData {
  hotelName: string;
  hotelCaption: string;
  starText: string;
  imageData: ImageData[];
  backgroundImage: string;
}

interface HeroProps {
  aboutInView: boolean;
  ads: boolean;
  data: HeroData;
}

const Hero = (props: HeroProps) => {
  const { aboutInView, ads, data } = props;
  const isMobile = useMediaQuery({ query: TABLET_MEDIA_QUERY });
  const [isFirstRender, setisFirstRender] = useState(() => true);
  const buttonClasses = isFirstRender ? '' : isMobile ? '' : 'w-1/3 max-w-sm';

  useEffect(() => {
    setisFirstRender(() => false);
  }, []);

  if (isFirstRender) return null;

  return (
    <main className="relative w-full mt-20 overflow-clip" id="hero">
      <SiteBG src={data.backgroundImage} />
      <motion.div
        className="flex flex-col items-center justify-start w-full gap-10 mx-auto overflow-hidden mt:gap-14 md:gap-16"
        layout
      >
        <Pitch
          mobile={isMobile}
          isFirstRender={isFirstRender}
          buttonClasses={buttonClasses}
          aboutInView={aboutInView}
          ads={ads}
          heroData={data}
        />
        {ads && (
          <MobileAds
            isFirstRender={isFirstRender}
            mobile={isMobile}
            ads={ads}
            starText={data.starText}
          />
        )}
        <HeroCarousel hints={false} imageData={data.imageData} />
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
  heroData: HeroData;
}

interface MobileAdsProps {
  isFirstRender: boolean;
  mobile: boolean;
  ads: boolean;
  starText: string;
}

const MobileAds = (props: MobileAdsProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {!props.isFirstRender && props.mobile && props.ads && (
        <div className="flex items-center justify-between mr-5">
          <div className="max-w-[18rem]">
            <div className="overflow-hidden w-[130px] aspect-square">
              <iframe
                className="scale-75 select-none"
                aria-label="a booking.com rating point card"
                referrerPolicy="no-referrer"
                src="https://badge.hotelstatic.com/?position=inline&amp;clickable=true&amp;url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fus%2Fathens-central.html"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-[8rem] mr-10">
            <StarDiv>
              <p className="text-center font-medium text-white text-sm min-w-[6rem]">
                {props.starText}
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
            <p className="text-sm font-medium text-center text-white">
              The only 4 star hotel in Athens
            </p>
          </StarDiv>
        </div>
        <div className="max-w-[18rem] absolute bottom-[60%]">
          <div className="overflow-hidden w-[130px] aspect-square">
            <iframe
              className="scale-75 select-none"
              aria-label="a booking.com rating point card"
              referrerPolicy="no-referrer"
              src="https://badge.hotelstatic.com/?position=inline&amp;clickable=true&amp;url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fus%2Fathens-central.html"
            ></iframe>
          </div>
        </div>
      </div>
    )}
    <section className="relative flex flex-col items-center justify-center max-w-5xl gap-1 mx-auto mt-12 cursor-default md:mt-10">
      <h1 className="px-6 font-title font-normal uppercase tracking-wide text-[1.94rem] sm:text-[2.3rem] mt:text-[2.38rem] md:text-[2.5rem] lg:text-[2.58rem] xl:text-[2.69rem] cursor-default text-center mb-[0.3rem] text-blue-deep">
        {props.heroData.hotelName}
      </h1>
      <h2 className="px-6 font-subtitle font-normal cursor-default text-[1.125rem] lg:text-[1.2rem] xl:text-[1.25rem] text-center text-gray-link tracking-wide mt-1 mt:mt-0">
        {props.heroData.hotelCaption}
      </h2>
      {props.isFirstRender && <div className="w-1 h-7"></div>}
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
          className="flex items-center justify-center gap-6 mt-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.22 } }}
        >
          <CallButton />
          <a href={bookingLink} tabIndex={-1} aria-label="Book Now">
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

const SiteBG = (props: { src: string }) => (
  <React.Fragment>
    <div className="fixed -z-[5] top-0 left-0 bottom-0 right-0 bg-[hsl(49,36%,96%)] opacity-[0.931] bg-clip-padding backdrop-filter backdrop-blur-xl shadow-sm"></div>
    <div className="fixed top-0 bottom-0 left-0 right-0 -z-10">
      <Image
        src={props.src}
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

export default memo(Hero);

interface EntryImage {
  sys: { id: string };
  fields: {
    file: {
      url: string;
    };
  };
}

interface Entry {
  sys: {
    id: string;
  };
  fields: {
    hotelName: string;
    hotelCaption: string;
    starText: string;
    images: EntryImage[];
    backgroundImage: EntryImage;
  };
}

export async function getHeroDataFromContentful() {
  const client = createClient({
    space: 'whrqes1tuvv5',
    accessToken: 'V_ajOeV3uMRT1T9cWIVOONxCr9Q8q75yA0NF5RgMnTU',
  });

  const heroData: HeroData = {
    hotelName: '',
    hotelCaption: '',
    starText: '',
    imageData: [],
    backgroundImage: '',
  };

  try {
    const entry = (await client.getEntry('3GgqaVPoQZmpABlpKe39OF')) as Entry;

    const imageData: ImageData[] = entry.fields.images.map((img, index) => ({
      alt: '',
      desc: '',
      id: img.sys.id,
      objectFit: 'cover',
      relativeOrder: index,
      src: `https:${img.fields.file.url}`,
    }));

    heroData.hotelName = entry.fields.hotelName;
    heroData.hotelCaption = entry.fields.hotelCaption;
    heroData.starText = entry.fields.starText;
    heroData.imageData = imageData;
    heroData.backgroundImage = `https:${entry.fields.backgroundImage.fields.file.url}`;
  } catch (e) {
    console.log(e);
  }

  return heroData;
}
