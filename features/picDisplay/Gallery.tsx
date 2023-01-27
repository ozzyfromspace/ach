import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useId } from 'react';
import Button from '../button';
import ImageControls from './ImageControls';
import MotionImage from './MotionImage';
import { CardImage, IsAnimating } from './PicDisplay';

interface GalleryProps {
  onClose: () => void;
  isOpen: boolean;
  imageCursor: CardImage;
  firstAnimation: boolean;
  setIsAnimating: React.Dispatch<React.SetStateAction<IsAnimating>>;
  onPrev: () => void;
  onNext: () => void;
  title: string;
  mainDescription: string;
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
    mainDescription,
    title,
  } = props;

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Panel>
        <motion.div
          className="fixed z-[100] inset-0 flex flex-col justify-center bg-[hsla(211,30%,9%,86%)] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-[0.55] px-6"
          initial={{ opacity: 0.04, scale: 1.02 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.08, ease: 'linear' },
          }}
          exit={{
            opacity: 0.04,
            scale: 1.02,
            transition: { duration: 0.08, ease: 'linear' },
          }}
        >
          <div
            onClick={onClose}
            className="absolute inset-0 cursor-pointer no-highlight"
          ></div>
          <div className="overflow-y-auto py-12 flex flex-col justify-center items-center">
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
            <div className="w-full h-full flex flex-col gap-0 justify-center items-center">
              <Dialog.Title className="relative z-10 text-center text-2xl md:text-[1.65rem] lg:text-[1.9rem] font-light text-white font-title cursor-default">
                {title}
              </Dialog.Title>
              <div className="w-full max-w-6xl h-full flex flex-col flex-1 justify-center md:flex-row md:gap-8 lg:gap-9 xl:gap-12">
                <div className="flex flex-col w-full max-w-[69rem]">
                  <div
                    className={`relative min-w-[36vw] w-full aspect-[4/3] rounded-md overflow-hidden my-8 select-none`}
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
                </div>
                <div className="overflow-auto min-h-[10rem] text-white w-full md:w-1/2 flex justify-center items-center">
                  <div className="w-full overflow-scroll">
                    <Dialog.Description className="mb-6">
                      <p className="text-center">{mainDescription}</p>
                    </Dialog.Description>
                    <Dialog.Description
                      as="div"
                      className="relative z-10 mx-auto flex flex-row justify-center items-center w-min"
                    >
                      <Button
                        label="Book Now"
                        className="max-w-fit mx-auto"
                        selected={false}
                      />
                    </Dialog.Description>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Dialog.Panel>
    </Dialog>
  );
};

Gallery.defaultProps = {
  mainDescription: '',
};

export default Gallery;
