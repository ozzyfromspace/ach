import { AnimatePresence, motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import { useId, useState } from 'react';
import Gallery from './Gallery';
import ImageControls from './ImageControls';
import MotionImage from './MotionImage';

const cardAspectRatio = 'aspect-[7/5]';

export enum ImageDirection {
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

export interface CardImage {
  index: number;
  direction: ImageDirection;
  selectedPictures: Pictures;
}

interface Props {
  resourceData: Picture[];
  gallery: boolean;
}

export interface IsAnimating {
  value: boolean;
  count: number;
}

const PicDisplay = (props: Props) => {
  const componentId = useId();
  const { resourceData, gallery } = props;
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

  const onPrev = () => {
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

  const onNext = () => {
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

  const [galleryOpen, setGalleryOpen] = useState(() => false);

  return (
    <motion.div
      className={`relative z-0 ${cardAspectRatio} w-full rounded-md overflow-hidden`}
      initial={{ opacity: 0.69 }}
      animate={{ opacity: 1, transition: { duration: 0.42 } }}
      exit={{ opacity: 0.69, transition: { duration: 0.42 } }}
    >
      {gallery && (
        <button
          onClick={() => setGalleryOpen((s) => !s)}
          aria-label="open room gallery"
          className="absolute top-2 right-2 z-50 p-2 bg-white rounded-md flex justify-center items-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-blue-deep"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </button>
      )}
      <AnimatePresence>
        {galleryOpen && (
          <Gallery
            isOpen={gallery}
            onClose={() => setGalleryOpen(() => false)}
            firstAnimation={firstAnimation}
            imageCursor={imageCursor}
            onNext={onNext}
            onPrev={onPrev}
            setIsAnimating={setIsAnimating}
          />
        )}
      </AnimatePresence>
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
            imageClasses={picture.imageClasses}
            onImageClick={() => setGalleryOpen(() => true)}
          />
        ))}
      </AnimatePresence>
      <ImageControls onPrev={onPrev} onNext={onNext} />
    </motion.div>
  );
};

export default PicDisplay;
