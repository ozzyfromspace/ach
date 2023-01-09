import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useId, useState } from 'react';

const animationDurationSec = 0.25;

enum ImageDirection {
  RIGHT = 'right',
  LEFT = 'left',
}

export interface Picture {
  id: string;
  url: StaticImageData;
  description: string;
  imageClasses: string;
  priority: boolean;
}

type Pictures = [Picture, Picture, Picture];

interface CardImage {
  index: number;
  direction: ImageDirection;
  selectedPictures: Pictures;
}

interface Props {
  resourceData: Picture[];
}

interface ImageCustom extends Omit<CardImage, 'selectedPictures'> {
  first: boolean;
}

interface IsAnimating {
  value: boolean;
  count: number;
}

const PicDisplay = (props: Props) => {
  const componentId = useId();
  const { resourceData } = props;
  const rLen = resourceData.length;
  const [isAnimating, setIsAnimating] = useState<IsAnimating>(() => ({
    value: false,
    count: 0,
  }));

  const [firstAnimation, setFirstAnimation] = useState(() => true);

  const getSelectedPictures = (baseId: number): Pictures => {
    const newId = baseId < 0 ? baseId + rLen : baseId;
    return [newId % rLen, (newId + 1) % rLen, (newId + 2) % rLen].map(
      (index) => resourceData[index]
    ) as Pictures;
  };

  const [imageCursor, setImageCursor] = useState<CardImage>(() => {
    if (rLen < 3) throw new Error('rooms must have atleast three images');

    return {
      index: 0,
      direction: ImageDirection.RIGHT,
      selectedPictures: getSelectedPictures(0),
    };
  });

  const onNext = () => {
    if (isAnimating.value) return;

    firstAnimation && setFirstAnimation(() => false);

    setImageCursor((image) => {
      return {
        index: (image.index - 1 + rLen) % rLen,
        direction: ImageDirection.RIGHT,
        selectedPictures: getSelectedPictures(image.index - 1),
      };
    });
  };

  const onPrev = () => {
    if (isAnimating.value) return;

    firstAnimation && setFirstAnimation(() => false);

    setImageCursor((image) => {
      return {
        index: (image.index + 1) % rLen,
        direction: ImageDirection.LEFT,
        selectedPictures: getSelectedPictures(image.index + 1),
      };
    });
  };

  return (
    <motion.div
      className="relative z-0 aspect-square w-full rounded-md overflow-hidden"
      initial={{ opacity: 0.69 }}
      animate={{ opacity: 1, transition: { duration: 0.42 } }}
      exit={{ opacity: 0.69, transition: { duration: 0.42 } }}
    >
      <AnimatePresence mode="sync">
        {imageCursor.selectedPictures.map((picture, index) => (
          <MotionImage
            key={`${picture.id}${componentId}`}
            alt={picture.description}
            first={firstAnimation}
            direction={imageCursor.direction}
            index={index}
            src={picture.url}
            setIsAnimating={setIsAnimating}
          />
        ))}
      </AnimatePresence>
      <ImageControls onPrev={onPrev} onNext={onNext} />
    </motion.div>
  );
};

export default PicDisplay;

interface MotionImageProps extends ImageCustom {
  src: StaticImageData;
  setIsAnimating: React.Dispatch<React.SetStateAction<IsAnimating>>;
  alt: string;
}

const MotionImage = (props: MotionImageProps) => {
  const { src, alt, first, index, direction, setIsAnimating } = props;
  const custom: ImageCustom = {
    first,
    index,
    direction,
  };

  const decrementAnimationCounter = () => {
    setIsAnimating((s) => ({
      value: s.count !== 1,
      count: s.count - 1,
    }));
  };

  const incrementAnimationCounter = () => {
    setIsAnimating((s) => ({ value: true, count: s.count + 1 }));
  };

  return (
    <motion.div
      className="absolute w-full h-full overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={imageVariants}
      custom={custom}
      onAnimationStart={incrementAnimationCounter}
      onAnimationComplete={decrementAnimationCounter}
    >
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        priority
      />
    </motion.div>
  );
};

const imageVariants: Variants = {
  initial: (custom: ImageCustom) => ({
    zIndex:
      custom.direction === ImageDirection.LEFT && custom.index === 2
        ? -1
        : custom.index,
    x: custom.index === 0 ? '-100%' : custom.index === 1 ? '0%' : '100%',
    opacity: custom.first ? 0.8 : 1,
  }),
  animate: (custom: ImageCustom) => ({
    zIndex:
      custom.direction === ImageDirection.LEFT && custom.index === 2
        ? -1
        : custom.index,
    x: custom.index === 0 ? '-100%' : custom.index === 1 ? '0%' : '100%',
    opacity: 1,
    transition: {
      duration: custom.first ? 0.15 : animationDurationSec,
      ease: 'easeInOut',
    },
  }),
  exit: (custom: ImageCustom) => ({
    x: custom.direction === ImageDirection.RIGHT ? '100%' : '-100%',
    opacity: 1,
    transition: {
      duration: animationDurationSec,
      ease: 'easeInOut',
    },
  }),
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
