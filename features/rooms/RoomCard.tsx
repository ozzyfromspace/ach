import Button from '../button';
import PicDisplay from '../picDisplay/index';
import { RoomData } from './roomDataSlice';

interface Props {
  roomData: RoomData;
}

const RoomCard = (props: Props) => {
  const { roomData } = props;

  return (
    <div className="w-full min-w-[18rem] md:max-w-[25rem] p-1 rounded-md sm:hover:scale-[0.992] transition-all ease-in-out duration-200">
      <PicDisplay resourceData={roomData.pictureSlice} />
      <div className="relative flex flex-col pt-3 text-justify">
        <h3 className="select-none cursor-default text-xl font-title my-3 text-gray-dark">
          {roomData.roomName}
        </h3>
        <p className="select-none cursor-default text-base mb-4 text-[hsl(228,21%,24%,100%)] font-light">
          {roomData.mainDescription}
        </p>
        <Button label="Book Now" className="max-w-fit mr-auto" />
      </div>
    </div>
  );
};

export default RoomCard;
