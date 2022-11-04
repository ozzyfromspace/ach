import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MOBITABLET_MEDIA_QUERY } from '../../constants';
import ach from '../../public/ach.jpg';
import Button from '../button';

const Hero = () => {
  const isMobile = useMediaQuery({ query: MOBITABLET_MEDIA_QUERY });
  const [mobile, setMobile] = useState(() => false);

  useEffect(() => {
    setMobile(() => isMobile);
  }, [isMobile]);

  const buttonClasses = mobile ? '' : 'w-1/3 max-w-sm mt-9';

  return (
    <main className="w-full min-h-screen flex flex-col justify-start" id="hero">
      <section className="pt-[7.7rem] lg:pt-[7.3rem] pb-16 lg:pb-12 xl:pb-10 sm:pb-14 w-full max-w-5xl mx-auto flex flex-col justify-center items-center">
        <article>
          <h1 className="font-bold text-[2.4rem] sm:text-[2.5rem] lg:text-[2.6rem] xl:text-[2.8rem] cursor-default text-center mb-[0.3rem] text-blue-deep">
            Athens Central Hotel
          </h1>
          <h2 className="cursor-default font-medium text-xl text-center text-gray-dark">
            A hidden gem in the heart of Athens, OH
          </h2>
        </article>
        <Button
          label="Reserve a room"
          full={mobile}
          fixed={mobile}
          className={`text-xl sm:text-lg h-12 ${buttonClasses}`}
        />
      </section>

      <div className="relative h-[43vh] sm:h-[46vh] md:h-[53vh] lg:h-[64vh] xl:h-[68vh] min-h-[9em] max-h-[28rem] overflow-hidden">
        <Image
          src={ach}
          alt=""
          fill={true}
          className="object-cover max-w-5xl top-0 mx-auto brightness-[1.2] saturate-[1.13] sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl"
        />
      </div>
    </main>
  );
};

export default Hero;
