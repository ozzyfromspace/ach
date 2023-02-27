import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useId } from 'react';
import { bookingLink } from '../../constants';
import Button from '../button';
import { MainDescription } from '../rooms/types';
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
  mainDescriptionArray: MainDescription[];
  truncatedDescription: string;
  capacity: string;
}

const suiteTitle = 'Large Luxurious 2 Bedroom Suite & Living Room';

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
    mainDescriptionArray,
    title,
    capacity,
    truncatedDescription,
  } = props;

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Panel>
        <motion.div
          className="fixed z-[100] inset-0 flex flex-col justify-center bg-gray-light bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-[0.69] px-6"
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
          <div className="flex flex-col justify-center items-center">
            <button
              aria-label="close expanded gallery"
              className="absolute z-30 top-7 right-7 hover:scale-[1.06] transition-transform duration-150"
              onClick={onClose}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="black"
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

            <div className="flex-1 max-w-7xl max-h-[84vh] h-fit md:flex flex-col md:flex-row md:items-center gap-6 overflow-hidden">
              <div className="md:flex-1 flex flex-col items-center justify-around space-y-6">
                <div className="relative z-10 w-full font-normal text-center md:text-start text-2xl md:text-[1.65rem] lg:text-[1.9rem] font-title cursor-default h-min mr-auto flex flex-row flex-wrap justify-start items-start gap-4">
                  <p>{title}</p>
                  <span className="text-2xl text-gray-dark font-thin">
                    {capacity}
                  </span>
                </div>
                <p className="font-normal text-center md:text-start text-base md:text-lg lg:text-xl font-title cursor-default">
                  {truncatedDescription}
                </p>
                <div
                  className={`relative ${
                    title === suiteTitle ? 'w-4/5' : 'w-full'
                  } md:w-[54vw] aspect-[4/3] rounded-md overflow-hidden select-none m-auto`}
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
                        quality={80}
                      />
                    ))}
                  </AnimatePresence>
                  <ImageControls onPrev={onPrev} onNext={onNext} />
                </div>
              </div>
              <div className="relative flex flex-col my-auto md:w-2/5 md:ml-6 pt-6 md:pt-0 h-fit md:mt-auto">
                <div className="font-[300] text-start overflow-y-scroll max-h-[26vh] max-w-[34rem] md:max-h-[50vh] -mb-6 md:pt-0">
                  {mainDescriptionArray.map((maindesc) => (
                    <p key={maindesc.id} className="pb-6">
                      {maindesc.value}
                    </p>
                  ))}
                  <div className="w-fit mx-auto bg-white p-3 rounded-md border border-[hsl(0,0%,84%,100%)] flex justify-start gap-2 mb-24">
                    <span className="font-semibold">Note:</span>
                    <p>Our Rooms are hypoallergenic and super clean</p>
                  </div>
                  <Dialog.Description className="absolute bottom-0 left-0 flex flex-row justify-start items-center w-fit bg-white rounded-md">
                    <a href={bookingLink} aria-label="Book Now">
                      <Button label="Book Now" className="max-w-fit" selected />
                    </a>
                  </Dialog.Description>
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
  mainDescriptionArray: '',
};

export default Gallery;
