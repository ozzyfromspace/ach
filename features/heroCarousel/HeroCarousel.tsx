import { AnimatePresence, motion, MotionProps, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
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
}

const imageData: ImageData[] = [
  {
    src: src0,
    relativeOrder: 0,
    id: '0',
    objectFit: 'cover',
    desc: 'Our comfortable Athena suite is waiting for you.',
  },
  {
    src: src1,
    relativeOrder: 1,
    id: '1',
    objectFit: 'cover',
    desc: 'Our new hotel is a modern, Greek-inspired experience in the heart of Athens, Ohio. We hope you enjoy staying with us. Kalos Irthate ❤️',
  },
  {
    src: src2,
    relativeOrder: 2,
    id: '2',
    objectFit: 'cover',
    desc: 'We offer a hot, complimentary weekend breakfast served by the friendliest staff in Athens',
  },
  {
    src: src3,
    relativeOrder: 3,
    id: '3',
    objectFit: 'cover',
    desc: 'Fun fact! We designed every room in our hotel uniquely. Welcome.',
  },
];

interface ImageCursor {
  index: number;
  dataLength: number;
  firstSlide: boolean;
  slice: [ImageData, ImageData, ImageData];
}

const scaleDown = 0.45;
const sideGap = 0.05;
const sideOpacity = 0.45;
const animationDurationSec = 3.9;
const slideDurationMs = 8100;

let scrollTimer: undefined | NodeJS.Timeout = undefined;
let cancelTimer: undefined | NodeJS.Timeout = undefined;
let timer: undefined | NodeJS.Timeout = undefined;

const HeroCarousel = () => {
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
    console.log('went forward!');
    setRerender((v) => !v);
  };

  const handleGoBackward = (isTransitioning: boolean) => () => {
    if (isTransitioning) return;
    setInControl(() => true);
    setReverse(() => true);
    console.log('went backward!');
    setRerender((v) => !v);
  };

  useEffect(() => {
    if (inControl) {
      updateCursor();
      setInControl(() => false);
    }

    console.log('setting up next animation');
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
    <div
      className={`relative w-full max-w-[clamp(42rem,54vw,54vh)] aspect-[5/3] rounded-lg`}
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
          />
        ))}
      </AnimatePresence>
    </div>
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
  // onMouseOver: (isTransitioning: boolean) => () => void;
  // onClick: (isTransitioning: boolean) => () => void;
  // onMouseOut: (isTransitioning: boolean) => () => void;
  scroll: boolean;
  enableScroll: Dispatch<SetStateAction<boolean>>;
  handleGoBackward: (isTransitioning: boolean) => () => void;
  handleGoForward: (isTransitioning: boolean) => () => void;
  reverse: boolean;
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
    ...restProps
  } = props;

  const handleMouseOut = useCallback(() => {
    console.log('mouseout!', isTransitioning, scroll);
    if (isTransitioning) return;

    // setRerender((v) => !v);
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
    console.log('click!', isTransitioning, index);
    if (isTransitioning) return;
    setTimeout(() => {
      index === 0
        ? handleGoForward(isTransitioning)()
        : index === 2
        ? handleGoBackward(isTransitioning)()
        : noop()();
    }, 20);
  };

  const handleMouseOver = () => {
    console.log(isTransitioning);

    if (isTransitioning) return;

    console.log('stopping animation', timer);
    clearInterval(timer);
    scrollTimer = setTimeout(() => {
      enableScroll(() => true);
      // }, 1750);
    }, 3000);
    // setRerender((v) => !v);
  };

  const handleAnimationStart = () => {
    setIsTransitioning(() => true);
  };

  const handleAnimationComplete = () => {
    setIsTransitioning(() => false);
  };

  return (
    <motion.div
      className={`absolute top-0 w-full aspect-[5/3] ${className} bg-[hsl(211,70%,42%,69%)] p-[1px] m-1 rounded-lg shadow-md`}
      onAnimationStart={handleAnimationStart}
      onAnimationComplete={handleAnimationComplete}
      // onMouseOver={onMouseOver(isTransitioning)}
      // // onMouseOut={onMouseOut(isTransitioning)}
      // onMouseOut={onMouseOut(isTransitioning)}
      onClick={onClick}
      onMouseOver={handleMouseOver}
      // // onMouseOut={onMouseOut(isTransitioning)}
      onMouseLeave={handleMouseOut}
      {...restProps}
    >
      <div
        // onClick={onClick}
        // onMouseOver={handleMouseOver}
        // // // onMouseOut={onMouseOut(isTransitioning)}
        // onMouseOut={handleMouseOut}
        // onMouseOver={handleMouseOver}
        // // onMouseOut={onMouseOut(isTransitioning)}
        // onMouseOut={handleMouseOut}
        // onClick={onClick(isTransitioning)}
        className={`select-none absolute z-10 inset-0 bg-[hsla(211,84%,100%,6.9%)] ${
          index === 1 ? 'hover:bg-[hsla(211,60%,9%,69%)]' : 'cursor-pointer'
        } rounded-lg duration-150 ease-in-out transition-all overflow-none`}
      >
        <div
          className={`text-transparent ${
            isTransitioning || index !== 1 ? '' : 'hover:text-white'
          } w-full h-full flex justify-center items-center px-6 md:px-12 py-6`}
        >
          <p className="font-h3 text-center">{desc}</p>
        </div>
      </div>
      <Image
        priority
        src={src}
        alt={alt}
        // onMouseOver={onMouseOver(isTransitioning)}
        // // onMouseOut={onMouseOut(isTransitioning)}
        // onMouseOut={onMouseOut(isTransitioning)}
        // onClick={onClick(isTransitioning)}
        className={`z-0 w-full aspect-[5/3] max-h-full object-${objectFit} rounded-[0.45rem] border-[0.5px] border-[hsla(0,0%,100%,100%)]`}
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
      duration: animationDurationSec,
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
}

export const HeroCarouselImage = (props: HeroCarouselImageProps) => {
  const {
    index,
    cursor,
    reverse,
    getTranslateX,
    scroll,
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
      // onMouseOver={index === 1 ? handleMouseOver : noop}
      // onMouseOut={index === 1 ? handleMouseOut : noop}
      // onClick={
      //   index === 0 ? handleGoForward : index === 2 ? handleGoBackward : noop
      // }
      // whileHover={
      //   index % 2
      //     ? {}
      //     : {
      //         cursor: 'pointer',
      //         scale: scaleDown * 1.03,
      //         transition: { duration: 0.15 },
      //       }
      // }
      variants={positionedImageVariants}
      custom={positionImageCustom}
    />
  );
};

export default HeroCarousel;
