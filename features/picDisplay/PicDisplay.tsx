import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useId, useState } from 'react';
import Button from '../button';

const animationDurationSec = 0.25;
const cardAspectRatio = 'aspect-[7/5]';

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
  gallery: boolean;
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
          className="absolute top-2 right-2 z-50 p-3 bg-white rounded-md flex justify-center items-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 text-blue-deep"
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

interface MotionImageProps extends ImageCustom {
  src: StaticImageData;
  setIsAnimating: React.Dispatch<React.SetStateAction<IsAnimating>>;
  imageClasses: string;
  alt: string;
  onImageClick: () => void;
  isGallery: boolean;
}

const MotionImage = (props: MotionImageProps) => {
  const {
    src,
    alt,
    first,
    index,
    direction,
    setIsAnimating,
    imageClasses,
    onImageClick,
    isGallery,
  } = props;
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
      className={`absolute w-full h-full overflow-hidden ${
        isGallery ? '' : 'cursor-pointer'
      }`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={imageVariants}
      custom={custom}
      onAnimationStart={incrementAnimationCounter}
      onAnimationComplete={decrementAnimationCounter}
      onClick={onImageClick}
    >
      <Image
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imageClasses} md:bg-blue-deep`}
        placeholder="blur"
        priority={false}
        unoptimized={false}
        quality={50}
        loading="lazy"
        sizes="(min-width: 1280px) 33vw, (min-width: 624px) 50vw, 100vw"
      />
    </motion.div>
  );
};

MotionImage.defaultProps = {
  onImageClick: () => {},
  isGallery: false,
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
      aria-label="see previous image"
      onClick={props.onPrev}
      className="rounded-md absolute z-10 top-0 left-0 bottom-0 p-5 w-32 bg-transparent mt:hover:bg-gradient-to-r mt:hover:from-[hsla(0,0%,0%,60%)] mt:hover:to-transparent ease-in-out transition-opacity flex flex-col justify-center items-start"
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
      aria-label="see next image"
      onClick={props.onNext}
      className="rounded-md absolute z-10 top-0 right-0 bottom-0 p-5 w-32 bg-transparent mt:hover:bg-gradient-to-l mt:hover:from-[hsla(0,0%,0%,60%)] mt:hover:to-transparent ease-in-out transition-opacity flex flex-col justify-center items-end"
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

interface GalleryProps {
  onClose: () => void;
  isOpen: boolean;
  imageCursor: CardImage;
  firstAnimation: boolean;
  setIsAnimating: React.Dispatch<React.SetStateAction<IsAnimating>>;
  onPrev: () => void;
  onNext: () => void;
}

const Gallery = (props: GalleryProps) => {
  const componentId = useId();
  const {
    isOpen,
    onClose,
    firstAnimation,
    imageCursor,
    setIsAnimating,
    onPrev,
    onNext,
  } = props;

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Panel>
        <motion.div
          className="fixed z-[100] inset-0 flex flex-col justify-center bg-[hsla(211,30%,9%,86%)] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-[0.55] px-6"
          initial={{ opacity: 0, scale: 1.4 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: 'easeInOut' },
          }}
          exit={{
            opacity: 0,
            scale: 1.4,
            transition: { duration: 0.4, ease: 'easeInOut' },
          }}
        >
          <div
            onClick={onClose}
            className="absolute inset-0 cursor-pointer"
          ></div>
          <div className="overflow-y-auto py-12">
            <Dialog.Title className="relative z-10 text-center text-4xl font-light text-white font-title cursor-default select-none">
              Athena 2-bedroom suite
            </Dialog.Title>
            <button
              aria-label="close expanded gallery"
              className="absolute top-7 right-7 hover:scale-[1.06] transition-transform duration-150"
              onClick={onClose}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div
              className={`relative min-w-[36vw] w-full max-w-[42rem] aspect-[7/5] rounded-md overflow-hidden mx-auto my-8`}
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
                    imageClasses={picture.imageClasses}
                    isGallery={true}
                  />
                ))}
              </AnimatePresence>
              <ImageControls onPrev={onPrev} onNext={onNext} />
            </div>
            <Dialog.Description className="relative z-10 text-center text-xl text-white font-light cursor-default select-none">
              Our amazing room is amazing
            </Dialog.Description>
            <Dialog.Description
              as="div"
              className="relative z-10 mx-auto flex flex-row justify-center items-center mt-6 w-min"
            >
              <Button
                label="Book Now"
                className="max-w-fit mx-auto"
                selected={false}
              />
            </Dialog.Description>
          </div>
        </motion.div>
      </Dialog.Panel>
    </Dialog>
  );
};
