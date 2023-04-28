import Image from 'next/image';
import { AmenityData } from './amenityData';

interface AmenityProps extends Omit<AmenityData, 'id'> {
  grayscale: boolean;
}

const Amenity = (props: AmenityProps) => {
  // const { icon: Icon, src, label, grayscale } = props;
  const { src, label, grayscale } = props;

  console.log('amenity rendering');

  return (
    <div className="relative flex flex-col justify-end items-center rounded-md aspect-[4/3] mx-auto w-full max-w-md bg-white border-[1px] border-[hsla(0,0%,100%,100%)] shadow-sm scale-100 duration-150 transition-all ease-in-out min-h-[10rem] overflow-clip">
      {/* <Icon className="absolute z-10 top-2 right-2 w-11 h-11 mt:w-12 mt:h-12 text-[hsla(211,84%,30%,85%)] bg-white rounded-md p-2 hover:text-blue-deep duration-150 transition-all ease-in-out pointer-events-none" /> */}
      <div className="relative top-0 left-0 flex-1 w-full h-full">
        <Image
          alt=""
          quality={16}
          src={src}
          priority
          className={`-z-10 object-cover w-full h-full brightness-105 ${
            grayscale
              ? 'md:grayscale md:hover:grayscale-0 md:duration-100 md:ease-in-out md:transition-all'
              : ''
          }`}
          fill
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center bg-[hsla(0,0%,100%,90%)] backdrop-blur-sm px-4 py-3 mb-2 rounded-md w-4/5 pointer-events-none">
        <p className="text-base font-medium tracking-wide text-center text-black cursor-default pointer-events-none font-subtitle min-w-fit">
          {label}
        </p>
      </div>
    </div>
  );
};

export default Amenity;
