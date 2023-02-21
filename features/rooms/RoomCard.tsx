import { useState } from 'react';
import Button from '../button';
import PicDisplay from '../picDisplay/index';
import { RoomData } from './types';

interface Props {
  roomData: RoomData;
}

const RoomCard = (props: Props) => {
  const { roomData } = props;
  const [galleryOpen, setGalleryOpen] = useState(() => false);

  return (
    <div className="mx-auto w-full max-w-[28rem] rounded-md flex flex-col">
      <PicDisplay
        galleryOpen={galleryOpen}
        setGalleryOpen={setGalleryOpen}
        resourceData={roomData.pictureSlice}
        gallery={true}
        title={roomData.roomName}
        mainDescriptionArray={roomData.mainDescriptionArray}
        capacity={roomData.capacity}
        truncatedDescription={roomData.truncatedDescription}
      />
      <div className="flex-1 relative flex flex-col justify-between pt-3 text-start tracking-wide">
        <button
          onClick={() => setGalleryOpen((s) => !s)}
          aria-label="Read detailed description of the room"
        >
          <div className="flex flex-wrap flex-col justify-between items-start gap-3 mt-3 mb-3">
            <h3 className="cursor-default text-lg font-sans text-gray-dark text-start">
              {roomData.roomName}
            </h3>
            <p className="cursor-default text-base text-[hsl(228,21%,24%,100%)] font-sans text-start">
              {roomData.truncatedDescription}
            </p>
            <p className="cursor-default text-base text-[hsl(228,21%,24%,100%)] -mt-2 font-subtitle text-start uppercase">
              Free Onsite Parking
            </p>
            <div className="flex flex-wrap justify-start items-center gap-2 -mt-1">
              <p className="cursor-default text-base text-[hsl(228,21%,24%,100%)] font-light">
                {roomData.capacity}
              </p>
              <p className="underline md:no-underline md:hover:underline cursor-pointer text-gray-link font-semibold text-start">
                See more
              </p>
            </div>
          </div>
        </button>
        <a
          href="https://hotels.cloudbeds.com/reservation/iyXSJl"
          aria-label="Book Now"
        >
          <Button label="Book Now" className="max-w-fit mr-auto" selected />
        </a>
      </div>
    </div>
  );
};

export default RoomCard;
