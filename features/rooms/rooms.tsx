import Padding from '../padding';
import RoomCard from './RoomCard';
import roomDataSlice from './roomDataSlice';

const Rooms = () => {
  return (
    <Padding className="relative z-[1] w-full pt-20" id="rooms">
      <h2 className="font-title tracking-wider text-blue-deep text-2xl sm:text-3xl md:text-3xl font-normal mb-8 mt:text-center pb-6">
        Our Rooms
      </h2>
      <div className="flex flex-col gap-14 mt:gap-12 md:gap-10 lg:gap-10 mt:flex-row mt:flex-wrap mt:justify-center mt:items-center">
        {roomDataSlice.map((roomData) => (
          <RoomCard key={roomData.roomType} roomData={roomData} />
        ))}
      </div>
    </Padding>
  );
};

export default Rooms;
