import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useId, useState } from 'react';
import Button from '../button';
// import AmenityIcon from './AmenityIcon';
import { RoomData } from './roomDataSlice';

enum ImageDirection {
  RIGHT = 'right',
  LEFT = 'left',
}

interface Image {
  index: number;
  direction: ImageDirection;
}

interface Props {
  roomData: RoomData;
}

const RoomCard = (props: Props) => {
  const componentId = useId();
  const { roomData } = props;
  const dataLen = roomData.pictureSlice.length;

  const [imageCursor, setImageCursor] = useState<Image>(() => ({
    index: 0,
    direction: ImageDirection.RIGHT,
  }));

  const onPrev = () => {
    setImageCursor((i) => {
      const index = i.index === 0 ? dataLen - 1 : i.index - 1;
      return {
        index,
        direction: ImageDirection.LEFT,
      };
    });
  };

  const onNext = () => {
    setImageCursor((i) => {
      const index = (i.index + 1) % dataLen;
      return {
        index,
        direction: ImageDirection.RIGHT,
      };
    });
  };

  const currPicture = roomData.pictureSlice[imageCursor.index];

  const Images = roomData.pictureSlice.map((picture) => {
    return (
      <Image
        key={`${picture.id}${picture.url}${componentId}`}
        src={picture.url}
        alt=""
        fill={true}
        className={`top-0 left-0 right-0 bottom-0 bg-gray-light rounded-md ${currPicture.imageClasses}`}
      />
    );
  });

  return (
    <div className="w-full min-w-[18rem] md:max-w-[25rem] p-1 rounded-md sm:hover:scale-[0.985] transition-all ease-in-out duration-200">
      <div className="relative z-0 aspect-[4/3] w-full overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={getVariants(imageCursor.direction)}
            key={currPicture.url}
          >
            {Images[imageCursor.index]}
          </motion.div>
        </AnimatePresence>
        {dataLen > 1 && <ImageControls onPrev={onPrev} onNext={onNext} />}
      </div>
      <div className="relative flex flex-col pt-3 text-justify">
        <h3 className="text-xl font-title my-3 text-gray-dark">
          {roomData.roomName}
        </h3>
        <p className="text-base mb-4 text-gray-link font-normal">
          {roomData.mainDescription}
        </p>
        {/* <div className="flex flex-row justify-start gap-8 mb-5 h-8 items-center">
          {roomData.amenities.map((a) => (
            <AmenityIcon amenity={a} key={a} />
          ))}
        </div> */}
        <Button label="Book Now" className="max-w-fit mr-auto" />
      </div>
    </div>
  );
};

export default RoomCard;

const getVariants = (direction: ImageDirection): Variants => {
  return {
    initial: {
      opacity: 0,
      x: direction === ImageDirection.RIGHT ? '-400px' : '400px',
    },
    animate: {
      opacity: 1,
      x: '0px',
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: direction === ImageDirection.RIGHT ? '400px' : '-400px',
      transition: {
        duration: 0.3,
      },
    },
  };
};

interface ImageControlProps {
  onPrev: () => void;
  onNext: () => void;
}

const ImageControls = (props: ImageControlProps) => (
  <React.Fragment>
    <button
      onClick={props.onPrev}
      className="rounded-md absolute z-10 top-0 left-0 bottom-0 p-5 w-20 bog-transparent hover:bg-gradient-to-r hover:from-[hsla(0,0%,0%,60%)] hover:to-transparent ease-in-out transition-opacity flex flex-col justify-center items-start"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="white"
        className="w-7 h-7 hover:scale-110 transition-all"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
    <button
      onClick={props.onNext}
      className="rounded-md absolute z-10 top-0 right-0 bottom-0 p-5 w-20 bg-transparent hover:bg-gradient-to-l hover:from-[hsla(0,0%,0%,60%)] hover:to-transparent ease-in-out transition-opacity flex flex-col justify-center items-end"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="white"
        className="w-7 h-7 hover:scale-110 transition-all"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  </React.Fragment>
);
