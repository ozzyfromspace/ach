import { motion, Variants } from 'framer-motion';
import React from 'react';

interface Props {
  label: string;
  full: boolean;
  fixed: boolean;
  className: string;
}

const Button = (props: Props) => {
  const { label, full, fixed, className } = props;
  const width = full ? (fixed ? '' : 'w-full') : '';
  const fixedClasses = fixed
    ? 'fixed z-10 bg-blue-dark bottom-6 left-6 right-6'
    : '';

  const darkBlue = 'hsl(228,70%,38%,90%)';

  return (
    <React.Fragment>
      {fixed && (
        <div className="fixed left-0 right-0 bottom-0 h-24 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[0.55] shadow-sm" />
      )}
      <motion.button
        variants={variants}
        initial="initial"
        animate="animate"
        whileHover={{
          scale: 0.98,
          transitionDuration: '0.15s',
          backgroundColor: darkBlue,
        }}
        className={`${className} font-title tracking-wide font-medium p-2 pl-6 pr-6 border-gray-400 gradient-blue text-white rounded-[0.25rem] ${width} ${fixedClasses}`}
      >
        {label}
      </motion.button>
    </React.Fragment>
  );
};

export default Button;

Button.defaultProps = {
  full: false,
  fixed: false,
  className: '',
};

const variants: Variants = {
  initial: {
    opacity: 0.8,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      stiffness: 25,
    },
  },
};
