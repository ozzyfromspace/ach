import { motion, Variants } from 'framer-motion';
import React from 'react';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalBG = (props: Props) => {
  const { onClose, children } = props;

  return (
    <React.Fragment>
      <motion.div
        className="cursor-pointer w-full bg-white bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-70 shadow-md h-full absolute -z-10 top-0 left-0"
        initial="initialLeft"
        animate="animateBgLeft"
        exit="exitLeft"
        variants={variants}
        onClick={onClose}
      ></motion.div>
      <motion.div
        className="absolute w-2/3 bg-blue-dark50 gradient-blue h-full ml-auto top-0 right-0 -z-10 rounded-l-lg"
        initial="initialRight"
        animate="animateBgRight"
        exit="exitRight"
        variants={variants}
      >
        {children}
      </motion.div>
    </React.Fragment>
  );
};

const duration = 0.35;

const variants: Variants = {
  initialLeft: {
    x: '-100vw',
    y: '0px',
    opacity: 0,
    transition: {
      duration,
    },
  },
  initialRight: {
    x: '83vw',
    y: '0px',
    opacity: 0,
    transition: {
      duration,
    },
  },
  exitLeft: {
    x: '-100vw',
    y: '0px',
    opacity: 0,
    transition: {
      duration,
    },
  },
  exitRight: {
    x: '83vw',
    y: '0px',
    opacity: 0,
    transition: {
      duration,
    },
  },
  animateBgLeft: {
    x: '0px',
    y: '0px',
    opacity: 0.65,
    transition: {
      duration,
    },
  },
  animateBgRight: {
    x: '0px',
    y: '0px',
    opacity: 1,
    transition: {
      duration,
    },
  },
};

export default ModalBG;

ModalBG.defaultProps = {
  children: null,
};
