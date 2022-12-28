import Padding from '../padding';
import RoomCard from './RoomCard';
import roomDataSlice from './roomDataSlice';

const Rooms = () => {
  return (
    <Padding className="relative z-[1] w-full pt-32" id="rooms">
      <h2 className="font-title tracking-wider text-gray-dark text-xl sm:text-2xl md:text-3xl font-light mb-8 mt:text-center pb-6">
        Our Rooms
      </h2>
      <div className="flex flex-col gap-5 mt:gap-8 md:gap-10 lg:gap-14 mt:flex-row mt:flex-wrap mt:justify-center mt:items-center">
        {roomDataSlice.map((roomData) => (
          <RoomCard key={roomData.roomType} roomData={roomData} />
        ))}
      </div>
    </Padding>
  );
};

export default Rooms;
