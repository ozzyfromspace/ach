import { AmenityData } from './amenityData';

interface AmenityProps extends Omit<AmenityData, 'id'> {}

const Amenity = (props: AmenityProps) => {
  const { icon: Icon, label } = props;

  return (
    <div className="flex flex-col justify-between items-center gap-4 rounded-md bg-[hsla(49,36%,97%,94%)] border-[1px] border-[hsla(0,0%,100%,100%)] shadow-sm p-4 scale-100 hover:scale-[0.987] duration-150 transition-all ease-in-out">
      <div>
        <Icon className="w-12 h-12 mt:w-16 mt:h-16 text-[hsla(211,84%,30%,85%)] hover:text-blue-deep duration-150 transition-all ease-in-out" />
      </div>
      <p className="font-subtitle font-light text-gray-dark cursor-default text-center">
        {label}
      </p>
    </div>
  );
};

export default Amenity;
