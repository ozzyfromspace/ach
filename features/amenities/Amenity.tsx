import Image from 'next/image';
import { AmenityData } from './amenityData';

interface AmenityProps extends Omit<AmenityData, 'id'> {}

const Amenity = (props: AmenityProps) => {
  const { icon: Icon, src, label } = props;

  return (
    <div className="relative flex flex-col justify-end items-center rounded-md aspect-[4/3] mx-auto w-fit max-w-md bg-white border-[1px] border-[hsla(0,0%,100%,100%)] shadow-sm scale-100 duration-150 transition-all ease-in-out min-h-[10rem] overflow-clip">
      <Icon className="absolute z-10 top-2 right-2 w-11 h-11 mt:w-12 mt:h-12 text-[hsla(211,84%,30%,85%)] bg-white rounded-md p-2 hover:text-blue-deep duration-150 transition-all ease-in-out" />
      <div className="flex-1 relative top-0 left-0 w-full h-full">
        <Image
          alt=""
          src={src}
          className="-z-10 object-cover w-full h-full brightness-110"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-wrap justify-center items-center bg-[hsla(0,0%,100%,70%)] backdrop-blur-[2px] px-4 py-3 mb-2 rounded-md">
        <p className="text-[1.15rem] font-subtitle tracking-wide font-medium cursor-default text-center pointer-events-none text-gray-dark w-fit">
          {label}
        </p>
      </div>
    </div>
  );
};

export default Amenity;
