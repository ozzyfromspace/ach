import Button from '../button';
import PicDisplay from '../picDisplay/index';
import { RoomData } from './types';

interface Props {
  roomData: RoomData;
}

const RoomCard = (props: Props) => {
  const { roomData } = props;

  return (
    <div className="w-full min-w-[18rem] md:max-w-[25rem] p-1 rounded-md">
      <PicDisplay
        resourceData={roomData.pictureSlice}
        gallery={true}
        title={roomData.roomName}
        mainDescription={roomData.mainDescription}
      />
      <div className="relative flex flex-col pt-3 text-justify">
        <h3 className="cursor-default text-xl font-title my-3 text-gray-dark">
          {roomData.roomName}
        </h3>
        <p className="cursor-default text-base mb-4 text-[hsl(228,21%,24%,100%)] font-light">
          {roomData.capacity}
        </p>
        <p className="cursor-default text-base mb-4 text-[hsl(228,21%,24%,100%)] font-light">
          {roomData.truncatedDescription}
        </p>
        <Button
          label="Book Now"
          className="max-w-fit mr-auto"
          selected={false}
        />
      </div>
    </div>
  );
};

export default RoomCard;
