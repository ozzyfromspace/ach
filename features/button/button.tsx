import { motion, Variants } from 'framer-motion';
import { useEffect } from 'react';
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

  useEffect(() => {
    container = document.getElementById('nav-modal');
  }, []);

  if (fixed && container) {
    return ReactDOM.createPortal(
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className={`select-none fixed min-w-max z-[26] left-0 right-0 bottom-0 h-24 bg-[hsl(47,100%,98%,93%)] shadow-none`}
        custom={{
          translateY: hideMobileButton ? '350%' : '0px',
          opacity: hideMobileButton ? 0 : 1,
        }}
      >
        <button
          onClick={hideMobileButton ? undefined : handleClick}
          className={`${className} select-none font-subtitle tracking-wide font-medium p-2 pl-6 pr-6 border-[1px] outline-offset-4 hover:scale-[0.98] duration-100 transition-all ${
            selected
              ? 'gradient-blue text-white border-none hover:bg-[hsl(228,70%,38%,90%)]'
              : 'bg-[white] text-[hsla(0,0%,90%,12%)] border-[1px] border-[hsl(0,0%,84%,100%)]'
          } rounded-[0.25rem] ${width} ${fixedClasses}`}
        >
          {label}
        </button>
      </motion.div>,
      container
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${className} select-none min-w-max font-subtitle font-medium tracking-wide p-2 pl-6 pr-6 outline-offset-4 hover:scale-[0.98] duration-100 transition-all ${
        selected
          ? 'gradient-blue text-white border-[hsl(0,0%,84%,100%)] hover:bg-[hsl(228,70%,38%,90%)]'
          : 'bg-[white] text-gray-link border-[1px] border-[hsl(0,0%,84%,100%)]'
      } rounded-[0.25rem] ${width}`}
    >
      {label}
    </button>
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
    opacity: 0.8,
    scale: 0.9,
  },
  animate: (custom: { translateY: string; opacity: number }) => ({
    translateY: custom.translateY,
    opacity: custom.opacity,
    scale: 1,
    transition: {
      stiffness: 35,
    },
  }),
};
