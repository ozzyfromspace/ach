import Image from 'next/image';
import { AmenityData } from './amenityData';

interface AmenityProps extends Omit<AmenityData, 'id'> {}

const Amenity = (props: AmenityProps) => {
  const { icon: Icon, label } = props;

  return (
    <div className="relative flex flex-col justify-center items-center rounded-md bg-[hsla(49,36%,97%,94%)] border-[1px] border-[hsla(0,0%,100%,100%)] shadow-sm scale-100 duration-150 transition-all ease-in-out min-h-[10rem] overflow-clip">
      <div>
        {/* <Icon className="w-12 h-12 mt:w-16 mt:h-16 text-[hsla(211,84%,30%,85%)] hover:text-blue-deep duration-150 transition-all ease-in-out" /> */}
        <Image alt="" src="/rainbow.jpg" className="object-cover -z-20" fill />
        <div className="absolute bg-[hsl(211,60%,10%)] opacity-50 hover:opacity-80 duration-300 transition-opacity ease-in-out inset-0 -z-10"></div>
      </div>
      <p className="font-subtitle font-semibold text-white cursor-default text-center pointer-events-none">
        {label}
      </p>
    </div>
  );
};

export default Amenity;
