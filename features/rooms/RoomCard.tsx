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
    <div className="w-full min-w-[18rem] md:max-w-[25rem] p-1 rounded-md">
      <PicDisplay
        galleryOpen={galleryOpen}
        setGalleryOpen={setGalleryOpen}
        resourceData={roomData.pictureSlice}
        gallery={true}
        title={roomData.roomName}
        mainDescriptionArray={roomData.mainDescriptionArray}
      />
      <div className="relative flex flex-col pt-3 text-start tracking-wide">
        <button
          onClick={() => setGalleryOpen((s) => !s)}
          aria-label="Read detailed description of the room"
        >
          <div className="flex flex-wrap items-center gap-3 mt-3 mb-3">
            <h3 className="cursor-default text-xl font-sans text-gray-dark">
              {roomData.roomName}
            </h3>
            <p className="cursor-default text-base text-[hsl(228,21%,24%,100%)] font-light mt-[0.125rem]">
              {roomData.capacity}
            </p>
          </div>
          <p className="cursor-default text-base text-[hsl(228,21%,24%,100%)] font-subtitle mb-1 text-start">
            {roomData.truncatedDescription}
          </p>
          <p className="underline md:no-underline md:hover:underline mb-6 cursor-pointer text-gray-link font-light text-start">
            See more
          </p>
        </button>
        <a
          href="https://hotels.cloudbeds.com/reservation/iyXSJl"
          aria-label="Book Now"
        >
          <Button
            label="Book Now"
            className="max-w-fit mr-auto"
            selected={false}
          />
        </a>
      </div>
    </div>
  );
};

export default RoomCard;
