import Padding from '../padding';
import RoomCard from './RoomCard';
import roomDataSlice from './roomDataSlice';

const Rooms = () => {
  return (
    <Padding
      className="relative w-full h-screen pt-10 bg-gray-light"
      id="rooms"
    >
      <h2 className="font-title tracking-wider text-gray-dark text-2xl sm:text-3xl md:text-4xl font-medium pt-10 mb-8">
        Our Rooms
      </h2>
      {/* <div>
        <h3>Each room is uniquely designed</h3>
        <p>
          We furnish every room elegantly with your comfort in mind. Each with
          floor-to-ceiling windows to provide nostalgic views of Uptown Athens.
          From luxurious water features to oval barn-style glass shower doors,
          our modern European-style bathrooms will surely impress. Unwind &
          enjoy your stay at the Athens Central Hotel.
        </p>
      </div> */}
      {[roomDataSlice[0]].map((roomData) => (
        <RoomCard key={roomData.roomType} roomData={roomData} />
      ))}
    </Padding>
  );
};

export default Rooms;
