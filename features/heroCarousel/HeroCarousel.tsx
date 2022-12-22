import { AnimatePresence, motion, MotionProps, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import src0 from '../../public/events/birthday-example1.jpeg';
import src1 from '../../public/events/birthday-example2.jpeg';
import src2 from '../../public/events/birthday-example3.jpeg';
import src3 from '../../public/rooms/athena-1.jpeg';

interface ImageData {
  src: string | StaticImageData;
  id: string;
  relativeOrder: number;
}

const imageData: ImageData[] = [
  { src: src0, relativeOrder: 0, id: '0' },
  { src: src1, relativeOrder: 1, id: '1' },
  { src: src2, relativeOrder: 2, id: '2' },
  { src: src3, relativeOrder: 3, id: '3' },
];

interface ImageCursor {
  index: number;
  dataLength: number;
  firstSlide: boolean;
  slice: [ImageData, ImageData, ImageData];
}

const scaleDown = 0.49;
const animationDurationSec = 2.2;
const slideDurationMs = 6300;

const getTranslateX = (position: 'left' | 'right') =>
  position === 'left'
    ? `-${(1 - scaleDown) * 50}%`
    : `-${(1 + scaleDown) * 50}%`;

let timer: undefined | NodeJS.Timer = undefined;

const HeroCarousel = () => {
  const [cursor, setCursor] = useState<ImageCursor>(() => {
    if (imageData.length < 3)
      throw new Error('hero carousel requires atleast 3 images');

    return {
      index: 0,
      firstSlide: true,
      dataLength: imageData.length,
      slice: [imageData[0], imageData[1], imageData[2]],
    };
  });

  const updateCursor = () => {
    setCursor((c) => {
      const newCursorIndex =
        (((c.index - 1) % c.dataLength) + c.dataLength) % c.dataLength;

      return {
        index: newCursorIndex,
        dataLength: c.dataLength,
        firstSlide: false,
        slice: [
          imageData[newCursorIndex],
          imageData[
            (((newCursorIndex + 1) % c.dataLength) + c.dataLength) %
              c.dataLength
          ],
          imageData[
            (((newCursorIndex + 2) % c.dataLength) + c.dataLength) %
              c.dataLength
          ],
        ],
      };
    });
  };

  useEffect(() => {
    timer = setInterval(() => updateCursor(), slideDurationMs);

    return () => {
      clearInterval(timer);
      timer = undefined;
    };
  }, []);

  return (
    <div className="relative w-full h-[min(80vw,80vh)] bg-[yellow]">
      <AnimatePresence mode="sync">
        {cursor.slice.map((el, index) => {
          const positionImageCustom: PositionImageCustom = {
            zIndex: index % 2 ? 2 : 1,
            firstSlide: cursor.firstSlide,
            firstImage: !index,
            left: index === 0 ? '0%' : index === 1 ? '50%' : '100%',
            translateX:
              index === 0
                ? getTranslateX('left')
                : index === 1
                ? '-50%'
                : getTranslateX('right'),
            scale: index % 2 ? 1 : scaleDown,
            opacity: index % 2 ? 1 : 0.4,
          };

          return (
            <PositionedImage
              key={el.id}
              src={el.src}
              relativeOrder={index}
              className="bg-[red]"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={positionedImageVariants}
              custom={positionImageCustom}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};

interface PositionedImageProps extends MotionProps {
  src: string | StaticImageData;
  alt: string;
  relativeOrder: number;
  galleryLength: number;
  nrAnimations: number;
  className: string;
}

interface PositionImageCustom {
  left: string;
  translateX: string;
  scale: number;
  opacity: number;
  firstSlide: boolean;
  firstImage: boolean;
  zIndex: number;
}

const PositionedImage = (props: PositionedImageProps) => {
  const {
    src,
    alt,
    relativeOrder,
    className,
    galleryLength,
    nrAnimations,
    ...restProps
  } = props;

  if (!src) return null;

  return (
    <motion.div
      className={`absolute top-0 h-full aspect-square ${className}`}
      {...restProps}
    >
      <Image
        priority
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

PositionedImage.defaultProps = {
  src: '',
  alt: '',
  relativeOrder: -1,
  galleryLength: 0,
  nrAnimations: -1,
  className: '',
};

const positionedImageVariants: Variants = {
  initial: (custom: PositionImageCustom) => {
    if (custom.firstSlide) {
      return {
        zIndex: custom.zIndex,
        left: custom.left,
        translateX: custom.translateX,
        scale: custom.scale * 0.69,
        opacity: custom.opacity * 0.69,
      };
    }

    if (custom.firstImage) {
      return {
        zIndex: custom.zIndex,
        left: '-35%',
        translateX: '0%',
        scale: 0,
        opacity: 0,
      };
    }

    return {};
  },
  animate: (custom: PositionImageCustom) => ({
    zIndex: custom.zIndex,
    left: custom.left,
    translateX: custom.translateX,
    scale: custom.scale,
    opacity: custom.opacity,

    transition: {
      duration: animationDurationSec,
    },
  }),
  exit: {
    zIndex: 0,
    left: '125%',
    translateX: '0%',
    opacity: 0,
    scale: 0,
    transition: {
      duration: animationDurationSec,
    },
  },
};

export default HeroCarousel;
