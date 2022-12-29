import Padding from '../padding';
import amenityData, { AmenityData } from './amenityData';

const Amenities = () => {
  return (
    <Padding id="amenities">
      <h2 className="select-none font-title tracking-wider text-blue-deep text-2xl sm:text-3xl md:text-3xl font-normal mb-8 mt:text-center pb-6 pt-[5rem]">
        Amenities
      </h2>
      <div className="grid grid-cols-2 mt:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
        {amenityData.map((amenity) => {
          return (
            <Amenity
              key={amenity.id}
              icon={amenity.icon}
              label={amenity.label}
            />
          );
        })}
      </div>
    </Padding>
  );
};

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

export default Amenities;
