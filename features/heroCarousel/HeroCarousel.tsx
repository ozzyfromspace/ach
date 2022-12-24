import { AnimatePresence, motion, MotionProps, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import src1 from '../../public/hero/ach-leftcrop.jpg';
import src0 from '../../public/hero/athena-1.jpeg';
import src2 from '../../public/hero/athena-2.jpeg';
import src3 from '../../public/hero/breakfast-1.jpeg';
import src4 from '../../public/hero/cleo-1.jpeg';
import src5 from '../../public/hero/hero-bed-1.jpeg';
import src6 from '../../public/hero/lobby-1.jpeg';

type ObjectFit = 'cover' | 'contain' | 'fill';

interface ImageData {
  src: string | StaticImageData;
  id: string;
  relativeOrder: number;
  objectFit: ObjectFit;
}

const imageData: ImageData[] = [
  { src: src0, relativeOrder: 0, id: '0', objectFit: 'cover' },
  { src: src1, relativeOrder: 1, id: '1', objectFit: 'cover' },
  { src: src2, relativeOrder: 2, id: '2', objectFit: 'cover' },
  { src: src3, relativeOrder: 3, id: '3', objectFit: 'cover' },
  { src: src4, relativeOrder: 4, id: '4', objectFit: 'cover' },
  { src: src1, relativeOrder: 5, id: '5', objectFit: 'cover' },
  { src: src5, relativeOrder: 6, id: '6', objectFit: 'cover' },
  { src: src6, relativeOrder: 7, id: '7', objectFit: 'cover' },
];

interface ImageCursor {
  index: number;
  dataLength: number;
  firstSlide: boolean;
  slice: [ImageData, ImageData, ImageData];
}

const scaleDown = 0.45;
const sideGap = 0.05;
const animationDurationSec = 3.9;
const slideDurationMs = 8100;

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
    <div
      className={`relative w-full max-w-[clamp(42rem,54vw,54vh)] aspect-[5/3] rounded-lg`}
    >
      <AnimatePresence mode="sync">
        {cursor.slice.map((el, index) => {
          const positionImageCustom: PositionImageCustom = {
            zIndex: index % 2 ? 2 : 1,
            firstSlide: cursor.firstSlide,
            firstImage: !index,
            left:
              index === 0
                ? `-${(scaleDown + sideGap) * 100}%`
                : index === 1
                ? '50%'
                : `${(1 + scaleDown + sideGap) * 100}%`,
            translateX:
              index === 0
                ? getTranslateX('left')
                : index === 1
                ? '-50%'
                : getTranslateX('right'),
            scale: index % 2 ? 1 : scaleDown,
            opacity: index % 2 ? 1 : 0.32,
          };

          return (
            <PositionedImage
              key={el.id}
              src={el.src}
              objectFit={el.objectFit}
              relativeOrder={index}
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
  objectFit: ObjectFit;
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
    objectFit,
    ...restProps
  } = props;

  if (!src) return null;

  return (
    <motion.div
      className={`absolute top-0 w-full aspect-[5/3] ${className} p-[0.69%] rounded-lg`}
      {...restProps}
    >
      <Image
        priority
        src={src}
        alt={alt}
        className={`z-0 w-full aspect-[5/3] max-h-full object-${objectFit} rounded-sm border-[1px] border-[white]`}
      />
      <BlurredFrame />
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
        left: `-${(1 + scaleDown + sideGap) * 100}%`,
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

const BlurredFrame = () => {
  return <div className={`absolute -z-10 inset-0 bg-blue-dark rounded-lg`} />;
};

export default HeroCarousel;
