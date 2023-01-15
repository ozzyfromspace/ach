import { AnimatePresence, motion, MotionProps, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import src1 from '../../public/hero/ach-leftcrop.jpg';
import src0 from '../../public/hero/athena-1.jpeg';
import src2 from '../../public/hero/breakfast-1.jpeg';
import src3 from '../../public/hero/cleo-1.jpeg';

type ObjectFit = 'cover' | 'contain' | 'fill';

interface ImageData {
  src: string | StaticImageData;
  desc: string;
  id: string;
  relativeOrder: number;
  objectFit: ObjectFit;
  alt: '';
}

const imageData: ImageData[] = [
  {
    src: src0,
    relativeOrder: 0,
    id: '0',
    objectFit: 'cover',
    desc: 'Our comfortable Athena suite is waiting for you.',
    alt: '',
  },
  {
    src: src1,
    relativeOrder: 1,
    id: '1',
    objectFit: 'cover',
    desc: 'Our new hotel is a modern, Greek-inspired experience in the heart of Athens, Ohio. We hope you enjoy staying with us. Kalos Irthate ❤️',
    alt: '',
  },
  {
    src: src2,
    relativeOrder: 2,
    id: '2',
    objectFit: 'cover',
    desc: 'We offer a hot, complimentary weekend breakfast served by the friendliest staff in Athens',
    alt: '',
  },
  {
    src: src3,
    relativeOrder: 3,
    id: '3',
    objectFit: 'cover',
    desc: 'From the architecture to the interior design, every room in our boutique hotel has a unique feel',
    alt: '',
  },
];

interface ImageCursor {
  index: number;
  dataLength: number;
  firstSlide: boolean;
  slice: [ImageData, ImageData, ImageData];
}

const scaleDown = 0.53;
const sideGap = 0.05;
const sideOpacity = 0.39;
const animationDurationSec = 2.4;
const slideDurationMs = 6500;

let scrollTimer: undefined | NodeJS.Timeout = undefined;
let cancelTimer: undefined | NodeJS.Timeout = undefined;
let timer: undefined | NodeJS.Timeout = undefined;

interface HeroCarouselProps {
  hints: boolean;
}

const HeroCarousel = (props: HeroCarouselProps) => {
  const { hints } = props;

  const [reverse, setReverse] = useState(() => false);
  const [inControl, setInControl] = useState(() => false);
  const [rerender, setRerender] = useState(() => false);
  const [scroll, enableScroll] = useState(() => false);

  const getTranslateX = useCallback(
    (position: 'left' | 'right') => {
      if (!reverse) {
        return position === 'left'
          ? `-${(1 - scaleDown) * 50}%`
          : `-${(1 + scaleDown) * 50}%`;
      }

      return position === 'left'
        ? `-${(1 - scaleDown) * 50}%`
        : `-${(1 + scaleDown) * 50}%`;
    },
    [reverse]
  );

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

  const updateCursor = useCallback(() => {
    setCursor((c) => {
      const newCursorIndex =
        (((c.index + (reverse ? 1 : -1)) % c.dataLength) + c.dataLength) %
        c.dataLength;

      return {
        index: newCursorIndex,
        dataLength: c.dataLength,
        firstSlide: false && !rerender,
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
  }, [reverse, setCursor, rerender]);

  const handleGoForward = (isTransitioning: boolean) => () => {
    if (isTransitioning) return;
    setInControl(() => true);
    setReverse(() => false);
    setRerender((v) => !v);
  };

  const handleGoBackward = (isTransitioning: boolean) => () => {
    if (isTransitioning) return;
    setInControl(() => true);
    setReverse(() => true);
    setRerender((v) => !v);
  };

  useEffect(() => {
    if (inControl) {
      updateCursor();
      setInControl(() => false);
    }

    cancelTimer = setTimeout(() => {
      if (reverse) {
        setReverse(() => false);
      }
    }, animationDurationSec * 900);

    timer = setInterval(updateCursor, slideDurationMs);

    return () => {
      clearTimeout(cancelTimer);
      clearTimeout(scrollTimer);
      clearInterval(timer);
      scrollTimer = undefined;
      cancelTimer = undefined;
      timer = undefined;
    };
  }, [updateCursor, inControl, reverse, rerender]);

  return (
    <motion.div
      className={`relative w-full max-w-[clamp(42rem,54vw,54vh)] aspect-[5/3] rounded-lg mb-1`}
      layout
    >
      <AnimatePresence mode="sync">
        {cursor.slice.map((el, index) => (
          <HeroCarouselImage
            key={el.id}
            cursor={cursor}
            enableScroll={enableScroll}
            getTranslateX={getTranslateX}
            handleGoBackward={handleGoBackward}
            handleGoForward={handleGoForward}
            imageData={el}
            index={index}
            reverse={reverse}
            scroll={scroll}
            hints={hints}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

interface PositionedImageProps extends MotionProps {
  src: string | StaticImageData;
  desc: string;
  index: number;
  alt: string;
  relativeOrder: number;
  galleryLength: number;
  nrAnimations: number;
  className: string;
  objectFit: ObjectFit;
  scroll: boolean;
  enableScroll: Dispatch<SetStateAction<boolean>>;
  handleGoBackward: (isTransitioning: boolean) => () => void;
  handleGoForward: (isTransitioning: boolean) => () => void;
  reverse: boolean;
  id: string;
  hints: boolean;
}

interface PositionImageCustom {
  left: string;
  translateX: string;
  scale: number;
  opacity: number;
  firstSlide: boolean;
  targetImage: boolean;
  zIndex: number;
  reverse: boolean;
}

const PositionedImage = (props: PositionedImageProps) => {
  const goLeftRef = useRef<HTMLButtonElement | null>(null);
  const goRightRef = useRef<HTMLButtonElement | null>(null);
  const focusedElementRef = useRef<HTMLButtonElement | null>(null);

  const [isTransitioning, setIsTransitioning] = useState(() => false);
  const {
    index,
    src,
    alt,
    desc,
    relativeOrder,
    className,
    galleryLength,
    nrAnimations,
    objectFit,
    reverse,
    scroll,
    enableScroll,
    handleGoBackward,
    handleGoForward,
    hints,
    id,
    ...restProps
  } = props;

  const handleMouseOut = useCallback(() => {
    if (isTransitioning) return;

    clearTimeout(scrollTimer);
    scrollTimer = undefined;

    if (scroll) {
      reverse
        ? handleGoBackward(isTransitioning)()
        : handleGoForward(isTransitioning)();
    }

    enableScroll(() => false);
  }, [
    scroll,
    enableScroll,
    handleGoBackward,
    handleGoForward,
    isTransitioning,
    reverse,
  ]);

  if (!src) return null;

  const noop = () => () => {};

  const onClick = () => {
    if (isTransitioning) return;
    setTimeout(() => {
      index === 0
        ? handleGoForward(isTransitioning)()
        : index === 2
        ? handleGoBackward(isTransitioning)()
        : noop()();
    }, 20);
  };

  const goRight = () => {
    if (isTransitioning) return;
    setTimeout(() => {
      handleGoForward(isTransitioning)();
    }, 20);
  };

  const goLeft = () => {
    if (isTransitioning) return;
    setTimeout(() => {
      handleGoBackward(isTransitioning)();
    }, 20);
  };

  const handleMouseOver = () => {
    if (isTransitioning) return;

    clearInterval(timer);
    scrollTimer = setTimeout(() => {
      enableScroll(() => true);
    }, 2850);
  };

  const handleAnimationStart = () => {
    setIsTransitioning(() => true);
  };

  const handleAnimationComplete = () => {
    setIsTransitioning(() => false);
  };

  const handleControlBlur =
    (buttonRef: MutableRefObject<HTMLButtonElement | null>) => () => {
      setTimeout(() => {
        if (focusedElementRef.current === buttonRef.current) {
          return;
        }

        handleMouseOut();
      }, 0);
    };

  return (
    <motion.div
      className={`absolute top-0 w-full aspect-[5/3] ${className} bg-[hsl(213,69%,69%,54%)] p-[1px] rounded-lg shadow-md overflow-hidden`}
      onAnimationStart={handleAnimationStart}
      onAnimationComplete={handleAnimationComplete}
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
      {...restProps}
    >
      <div
        className={`select-none absolute z-10 inset-0 bg-[hsla(211,84%,100%,6.9%)] ${
          hints && index === 1 && !isTransitioning
            ? 'hover:bg-[hsla(211,60%,9%,69%)]'
            : index !== 1 && !isTransitioning
            ? 'cursor-pointer'
            : ''
        } rounded-lg duration-150 ease-in-out transition-all overflow-none`}
      >
        {hints && (
          <div
            className={`text-transparent ${
              isTransitioning || index !== 1 || !hints ? '' : 'hover:text-white'
            } w-full h-full flex justify-center items-center px-6 md:px-12 py-6`}
          >
            <p className="font-h3 text-center">{desc}</p>
          </div>
        )}
        {!isTransitioning && index === 1 && (
          <div
            className="w-full h-full flex flex-row justify-between"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            <button
              ref={goRightRef}
              aria-label="show next picture of the carousel"
              className="w-1/3 h-full cursor-pointer bg-transparent mt:hover:bg-gradient-to-r mt:hover:from-[hsla(0,0%,0%,60%)] mt:hover:to-transparent ease-in-out transition-opacity"
              onClick={goRight}
              onFocus={() => {
                focusedElementRef.current = goRightRef.current;
                handleMouseOver();
              }}
              onBlur={handleControlBlur(goLeftRef)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="ml-7 w-7 h-7 hover:scale-110 transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              ref={goLeftRef}
              aria-label="show previous picture of the carousel"
              className="w-1/3 h-full cursor-pointer bg-transparent mt:hover:bg-gradient-to-l mt:hover:from-[hsla(0,0%,0%,60%)] mt:hover:to-transparent ease-in-out transition-opacity"
              onClick={goLeft}
              onFocus={() => {
                focusedElementRef.current = goLeftRef.current;
                handleMouseOver();
              }}
              onBlur={handleControlBlur(goRightRef)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="ml-auto mr-7 w-7 h-7 hover:scale-110 transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <Image
        priority={id === '1'}
        src={src}
        alt={alt}
        className={`z-0 w-full aspect-[5/3] max-h-full object-${objectFit} rounded-[0.45rem] border-[0.5px] border-[hsla(0,0%,100%,100%)]`}
        sizes="(min-width: 1280px) 33vw, (min-width: 624px) 50vw, 100vw"
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
        scale: custom.scale * 0.96,
        opacity: custom.opacity * 0.96,
      };
    }

    if (custom.targetImage) {
      return {
        zIndex: custom.zIndex,
        left: custom.reverse
          ? `${(1 + scaleDown + sideGap) * 100}%`
          : `-${(1 + scaleDown + sideGap) * 100}%`,
        translateX: '0%',
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
      duration: custom.firstSlide
        ? animationDurationSec * 0.3
        : animationDurationSec,
    },
  }),
  exit: (custom: PositionImageCustom) => ({
    zIndex: 0,
    left: custom.reverse ? '-125%' : '125',
    translateX: '0%',
    opacity: 0,
    scale: 0,
    transition: {
      duration: animationDurationSec,
    },
  }),
};

interface HeroCarouselImageProps {
  index: number;
  reverse: boolean;
  cursor: ImageCursor;
  imageData: ImageData;
  scroll: boolean;
  enableScroll: Dispatch<SetStateAction<boolean>>;
  handleGoBackward: (isTransitioning: boolean) => () => void;
  handleGoForward: (isTransitioning: boolean) => () => void;
  getTranslateX: (position: 'left' | 'right') => string;
  hints: boolean;
}

export const HeroCarouselImage = (props: HeroCarouselImageProps) => {
  const {
    index,
    cursor,
    reverse,
    getTranslateX,
    scroll,
    hints,
    enableScroll,
    imageData: el,
    handleGoBackward,
    handleGoForward,
  } = props;

  const positionImageCustom: PositionImageCustom = {
    zIndex: index % 2 ? 2 : 1,
    firstSlide: cursor.firstSlide,
    targetImage: reverse ? index === cursor.slice.length - 1 : !index,
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
    opacity: index % 2 ? 1 : sideOpacity,
    reverse,
  };

  return (
    <PositionedImage
      desc={el.desc}
      key={el.id}
      src={el.src}
      objectFit={el.objectFit}
      relativeOrder={index}
      initial="initial"
      animate="animate"
      exit="exit"
      enableScroll={enableScroll}
      handleGoBackward={handleGoBackward}
      handleGoForward={handleGoForward}
      reverse={reverse}
      scroll={scroll}
      index={index}
      hints={hints}
      variants={positionedImageVariants}
      custom={positionImageCustom}
      id={el.id}
      alt={el.desc}
    />
  );
};

export default HeroCarousel;
