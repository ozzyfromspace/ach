import { useState } from 'react';
import { bookingLink } from '../../constants';
import PicDisplay from '../picDisplay/index';
import { RoomData } from './types';

interface Props {
  roomData: RoomData;
}

const RoomCard = (props: Props) => {
  const { roomData } = props;
  const [galleryOpen, setGalleryOpen] = useState(() => false);

  return (
    <div className="mx-auto w-full max-w-[28rem] h-full rounded-md flex flex-col">
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
              <div className="flex gap-1 justify-start w-fit items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="hsl(228,21%,38%)"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <p className="cursor-default text-base text-[hsl(228,21%,24%,100%)] font-light">
                  {roomData.capacity}
                </p>
              </div>
              <p className="underline md:no-underline md:hover:underline cursor-pointer text-gray-link font-semibold text-start">
                See more
              </p>
            </div>
          </div>
        </button>
        <a
          href={bookingLink}
          aria-label="Book Now"
          className="w-fit"
          tabIndex={-1}
        ></a>
      </div>
    </div>
  );
};

export default RoomCard;
