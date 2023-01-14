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
        <button
          onClick={hideMobileButton ? undefined : handleClick}
          className={`${className} font-subtitle tracking-wide font-medium p-2 pl-6 pr-6 border-[1px] hover:scale-[0.98] hover:bg-[hsl(228,70%,38%,90%)] duration-100 transition-all ${
            selected
              ? 'gradient-blue text-white border-none'
              : 'bg-[white] text-[hsla(0,0%,90%,12%)] border-[1px] border-[hsl(0,0%,84%,100%)]'
          } rounded-[0.25rem] ${width} ${fixedClasses} ${
            hideMobileButton ? 'select-none' : 'select-all'
          }`}
        >
          {label}
        </button>
      </React.Fragment>,
      container
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${className} min-w-max font-subtitle font-medium tracking-wide p-2 pl-6 pr-6 hover:scale-[0.98] hover:bg-[hsl(228,70%,38%,90%)] duration-100 transition-all ${
        selected
          ? 'gradient-blue text-white border-[hsl(0,0%,84%,100%)]'
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
