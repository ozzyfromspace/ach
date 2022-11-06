import { motion, Variants } from 'framer-motion';
import ReactDOM from 'react-dom';
import ModalBG from './modal-bg';

interface Props {
  onClose: () => void;
}

const MenuModal = (props: Props) => {
  const { onClose } = props;

  const bar = (
    <div className="fixed z-10 top-0 left-0 right-0 bottom-0">
      <header className="p-4 flex justify-end items-center pr-6 h-20">
        <nav>
          <button onClick={onClose}>
            <motion.svg
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-8 h-8"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ scale: 0.95, transitionDuration: '0.1s' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          </button>
        </nav>
      </header>
      <ModalBG onClose={onClose} />
    </div>
  );

  const modalContainer = document.getElementById('nav-modal');
  return ReactDOM.createPortal(bar, modalContainer!);
};

export default MenuModal;

const variants: Variants = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { delay: 0.3, duration: 0.3 },
  },
  exit: { opacity: 0, pathLength: 0, transition: { delay: 0, duration: 0.3 } },
};
