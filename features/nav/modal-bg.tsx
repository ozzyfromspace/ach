import { motion, Variants } from 'framer-motion';
import React from 'react';

interface Props {
  onClose: () => void;
}

const ModalBG = (props: Props) => {
  const { onClose } = props;

  return (
    <React.Fragment>
      <motion.div
        className="w-full bg-[#ddd] h-full absolute -z-10 top-0 left-0"
        initial="initialLeft"
        animate="animateBgLeft"
        exit="exitLeft"
        variants={variants}
        onClick={onClose}
      ></motion.div>
      <motion.div
        className="w-5/6 bg-slate-700 h-full ml-auto absolute top-0 right-0 -z-10"
        initial="initialRight"
        animate="animateBgRight"
        exit="exitRight"
        variants={variants}
      ></motion.div>
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
