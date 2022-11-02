import Image from 'next/image';
import heroImage from '../../public/ach.jpg';
import Padding from '../padding/index';

const Hero = () => {
  return (
    <Padding>
      <div
        className="relative w-full max-h-screen flex justify-center items-start overflow-hidden xl:items-end mb-[4em]"
        id="hero"
      >
        {/* <div className="absolute top-32 md:top-1/2 md:-translate-y-1/2 md:py-9 md:px-14 md:bg-clip-padding md:backdrop-filter md:backdrop-blur-xl md:bg-opacity-100 md:shadow-sm md:rounded-md"> */}
        <div className="absolute top-32 md:top-1/2 md:-translate-y-1/2 md:py-9 md:px-14 bg-white md:rounded-lg sm:hover:scale-[1.03] sm:duration-500 sm:ease-in-out sm:transition-all">
          <h1 className="text-3xl sm:text-[2rem] md:text-4xl lg:text-5xl pt-2 sm:pt-0 font-medium">
            Athens Central Hotel
          </h1>
        </div>
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-0 opacity-0 md:opacity-[0.15] bg-white"></div> */}
        <Image
          src={heroImage}
          alt="front view of the athens central hotel located in athens, ohio"
          loading="eager"
          placeholder="blur"
          priority={true}
          quality={100}
          unselectable="on"
          className="grayscale-[0%] brightness-[1.32] top-0 left-0 right-0 -z-10 object-contain pt-56 md:pt-48 translate-x-2 lg:translate-x-6 xl:translate-x-[1.35rem] lg:pt-[11rem] xl:pt-60 2xl:pt-36 scale-[1.19] lg:scale-[1.15]"
        />
      </div>
    </Padding>
  );
};

export default Hero;
