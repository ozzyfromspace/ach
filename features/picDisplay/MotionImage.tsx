import { motion, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { CardImage, ImageDirection, IsAnimating } from './PicDisplay';

interface MotionImageProps extends ImageCustom {
  src: StaticImageData | string;
  setIsAnimating: React.Dispatch<React.SetStateAction<IsAnimating>>;
  imageClasses: string;
  alt: string;
  onImageClick: () => void;
  isGallery: boolean;
  quality: number;
}

interface ImageCustom extends Omit<CardImage, 'selectedPictures'> {
  first: boolean;
}

const animationDurationSec = 0.25;

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
    quality,
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
      <div className="hover:scale-[1.025] duration-120 transition-transform ease-out w-full h-full">
        <Image
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${imageClasses}`}
          // placeholder="blur"
          priority={false}
          unoptimized={false}
          quality={quality}
          loading="lazy"
          sizes="(min-width: 1280px) 33vw, (min-width: 624px) 50vw, 100vw"
          width="400"
          height="300"
        />
      </div>
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

export default MotionImage;
