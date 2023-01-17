import { Link as ReactScrollLink } from 'react-scroll';
import useStickyState from '../../hooks/useStickState';
import { useFocusedSection } from '../focusedSectionProvider/FocusedSectionProvider';
import Padding from '../padding';
import amenityData, { AmenityData } from './amenityData';

const Amenities = () => {
  const { isSticky, ref } = useStickyState();
  const {
    refs: { Amenities: amenities },
  } = useFocusedSection();

  return (
    <div ref={amenities.ref} className="relative z-0" id="amenities">
      <div
        ref={ref}
        className={`${
          isSticky
            ? 'bg-[hsl(60,30%,96%)] bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-sm'
            : ''
        } w-screen sticky top-20 z-10 font-title select-none tracking-wider text-blue-deep text-2xl sm:text-3xl md:text-3xl font-normal mt:text-center flex flex-col justify-center py-5 mt-0 h-20`}
      >
        <Padding>
          <ReactScrollLink
            to="amenities-content"
            spy={true}
            smooth={true}
            offset={-180}
            duration={380}
            href="/amenities"
          >
            <h2>Amenities</h2>
          </ReactScrollLink>
        </Padding>
      </div>
      <Padding
        id="amenities-content"
        className="grid grid-cols-2 mt:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 pt-8 pb-16"
      >
        {amenityData.map((amenity) => {
          return (
            <Amenity
              key={amenity.id}
              icon={amenity.icon}
              label={amenity.label}
            />
          );
        })}
      </Padding>
    </div>
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
