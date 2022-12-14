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
  hideMobileButton: boolean;
}

let container: HTMLElement | null = null;

const Button = (props: Props) => {
  const {
    label,
    full,
    fixed,
    className,
    selected,
    handleClick,
    hideMobileButton,
  } = props;
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
        <div
          className={`fixed min-w-max z-[6] left-0 right-0 bottom-0 h-24 ${
            hideMobileButton
              ? 'bg-[hsla(0,0%,100%,0%)] opacity-0 -z-10'
              : 'bg-[hsla(0,0%,100%,100%)] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[0.55] shadow-sm'
          } duration-150 transition-all ease-out`}
        />
        <motion.button
          variants={variants}
          initial="initial"
          animate="animate"
          onClick={hideMobileButton ? undefined : handleClick}
          whileHover={{
            scale: 0.98,
            transitionDuration: '0.1s',
            backgroundColor: selected ? darkBlue : 'hsla(0,0%,100%,100%)',
          }}
          className={`${className} font-subtitle tracking-wide font-medium p-2 pl-6 pr-6 border-[1px] ${
            selected
              ? 'gradient-blue text-white border-none'
              : 'bg-[white] text-[hsla(0,0%,90%,12%)] border-[1px] border-[hsl(0,0%,84%,100%)]'
          } rounded-[0.25rem] ${width} ${fixedClasses} ${
            hideMobileButton ? 'select-none' : 'select-all'
          }`}
          custom={{
            translateY: hideMobileButton ? '350%' : '0px',
            opacity: hideMobileButton ? 0 : 1,
          }}
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
      className={`${className} min-w-max font-subtitle font-medium tracking-wide p-2 pl-6 pr-6 ${
        selected
          ? 'gradient-blue text-white border-[hsl(0,0%,84%,100%)]'
          : 'bg-[white] text-gray-link border-[1px] border-[hsl(0,0%,84%,100%)]'
      } rounded-[0.25rem] ${width}`}
      custom={{ translateY: '0px', opacity: 1 }}
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
  hideMobileButton: false,
};

const variants: Variants = {
  initial: {
    translateY: '0px',
    backgroundColor: '#fff',
    opacity: 0.8,
    scale: 0.9,
  },
  animate: (custom: { translateY: string; opacity: number }) => ({
    translateY: custom.translateY,
    opacity: custom.opacity,
    scale: 1,
    transition: {
      stiffness: 25,
    },
  }),
};
