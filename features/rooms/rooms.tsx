import { Link as ReactScrollLink } from 'react-scroll';
import useStickyState from '../../hooks/useStickState';
import { useFocusedSection } from '../focusedSectionProvider/FocusedSectionProvider';
import Padding from '../padding';
import RoomCard from './RoomCard';
import roomDataSlice from './roomDataSlice';

const Rooms = () => {
  const { isSticky, ref } = useStickyState();
  const {
    refs: { Rooms: rooms },
  } = useFocusedSection();

  return (
    <div ref={rooms.ref} className="relative z-[1] w-full" id="rooms">
      <div
        ref={ref}
        className={`${
          isSticky
            ? 'bg-[hsl(60,30%,96%)] bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-sm'
            : ''
        } w-full sticky top-20 z-10 font-title select-none tracking-wider text-blue-deep text-2xl sm:text-3xl md:text-3xl font-normal mt:text-center flex flex-col justify-center py-5 mt-10 h-20`}
      >
        <Padding className="flex flex-col justify-center items-center">
          <ReactScrollLink
            to="rooms-content"
            spy={true}
            smooth={true}
            offset={-180}
            duration={380}
            className="p-2 rounded-full outline-offset-4"
            href="/rooms"
          >
            <h2>Our Rooms</h2>
          </ReactScrollLink>
        </Padding>
      </div>
      <Padding
        id="rooms-content"
        className="flex flex-col gap-14 mt:gap-12 md:gap-10 lg:gap-10 mt:flex-row mt:flex-wrap mt:justify-center mt:items-center mt-9 pb-12"
      >
        {roomDataSlice.map((roomData) => (
          <RoomCard key={roomData.roomType} roomData={roomData} />
        ))}
      </Padding>
    </div>
  );
};

export default Rooms;
