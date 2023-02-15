import { Link as ReactScrollLink } from 'react-scroll';
import useStickyState from '../../hooks/useStickState';
import { useFocusedSection } from '../focusedSectionProvider/FocusedSectionProvider';
import Padding from '../padding';
import Amenity from './Amenity';
import amenityData from './amenityData';

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
        <Padding className="w-full flex justify-center items-center">
          <ReactScrollLink
            to="amenities-content"
            spy={true}
            smooth={true}
            offset={-180}
            duration={380}
            className="w-fit p-2 rounded-full outline-offset-4"
            href="/amenities"
          >
            <h2>Amenities</h2>
          </ReactScrollLink>
        </Padding>
      </div>
      <Padding
        id="amenities-content"
        className="grid grid-cols-2 mt:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 mt-8 pb-16"
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

export default Amenities;
