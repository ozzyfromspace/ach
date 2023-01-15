import React from 'react';

interface ImageControlProps {
  onPrev: () => void;
  onNext: () => void;
}

const ImageControls = (props: ImageControlProps) => (
  <React.Fragment>
    <button
      aria-label="see previous image"
      onClick={props.onPrev}
      className="rounded-md absolute z-10 top-0 left-0 bottom-0 p-5 w-32 bg-transparent mt:hover:bg-gradient-to-r mt:hover:from-[hsla(0,0%,0%,60%)] mt:hover:to-transparent ease-in-out transition-opacity flex flex-col justify-center items-start"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="white"
        className="w-7 h-7 hover:scale-110 transition-all"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
    <button
      aria-label="see next image"
      onClick={props.onNext}
      className="rounded-md absolute z-10 top-0 right-0 bottom-0 p-5 w-32 bg-transparent mt:hover:bg-gradient-to-l mt:hover:from-[hsla(0,0%,0%,60%)] mt:hover:to-transparent ease-in-out transition-opacity flex flex-col justify-center items-end"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="white"
        className="w-7 h-7 hover:scale-110 transition-all"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  </React.Fragment>
);

export default ImageControls;
