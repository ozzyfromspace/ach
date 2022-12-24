import { motion, Variants } from 'framer-motion';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  label: string;
  full: boolean;
  fixed: boolean;
  className: string;
  handleClick: () => void;
  selected: boolean;
}

let container: HTMLElement | null = null;

const Button = (props: Props) => {
  const { label, full, fixed, className, selected, handleClick } = props;
  const width = full ? (fixed ? '' : 'w-full') : '';
  const fixedClasses = fixed
    ? 'fixed z-[7] bg-blue-dark bottom-6 left-6 right-6'
    : '';

  const darkBlue = 'hsl(228,70%,38%,90%)';

  useEffect(() => {
    container = document.getElementById('nav-modal');
  }, []);

  if (fixed && container) {
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="fixed min-w-max z-[6] left-0 right-0 bottom-0 h-24 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[0.55] shadow-sm" />
        <motion.button
          variants={variants}
          initial="initial"
          animate="animate"
          onClick={handleClick}
          whileHover={{
            scale: 0.98,
            transitionDuration: '0.1s',
            backgroundColor: selected ? darkBlue : 'hsla(0,0%,100%,100%)',
          }}
          className={`${className} font-title tracking-wide font-medium p-2 pl-6 pr-6 border-[1px] ${
            selected
              ? 'gradient-blue text-white border-none'
              : 'bg-[white] text-gray-link border-[1px] border-[hsl(0,0%,84%,100%)]'
          } rounded-[0.25rem] ${width} ${fixedClasses}`}
        >
          {label}
        </motion.button>
      </React.Fragment>,
      container
    );
  }

  return (
    <motion.button
      variants={variants}
      initial="initial"
      animate="animate"
      onClick={handleClick}
      whileHover={{
        scale: 0.98,
        transitionDuration: '0.1s',
        backgroundColor: selected ? darkBlue : 'hsla(0,0%,96.5%,100%)',
      }}
      className={`${className} min-w-max font-title tracking-wide font-medium p-2 pl-6 pr-6 ${
        selected
          ? 'gradient-blue text-white border-[hsl(0,0%,84%,100%)]'
          : 'bg-[white] text-gray-link border-[1px] border-[hsl(0,0%,84%,100%)]'
      } rounded-[0.25rem] ${width}`}
    >
      {label}
    </motion.button>
  );
};

export default Button;

Button.defaultProps = {
  full: false,
  fixed: false,
  className: '',
  handleClick: () => {},
  selected: true,
};

const variants: Variants = {
  initial: {
    backgroundColor: '#fff',
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
