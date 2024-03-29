import { useEffect, useState } from 'react';

interface Props {
  className: string;
}

const Fridge = (props: Props) => {
  const [firstRender, setFirstRender] = useState(() => true);

  useEffect(() => {
    if (firstRender && window && window.document) {
      setFirstRender(() => false);
    }
  }, [firstRender]);

  return (
    <div className={`flex justify-center items-center ${props.className}`}>
      {!firstRender && (
        <svg
          viewBox="0 0 40 40"
          stroke="hsla(211,84%,30%,85%)"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M29.375 1.25H10.625C9.63078 1.25112 8.6776 1.64656 7.97458 2.34958C7.27156 3.0526 6.87612 4.00578 6.875 5V36.25C6.87574 36.9128 7.13938 37.5483 7.60806 38.0169C8.07674 38.4856 8.71219 38.7493 9.375 38.75H30.625C31.2878 38.7493 31.9233 38.4856 32.3919 38.0169C32.8606 37.5483 33.1243 36.9128 33.125 36.25V5C33.1239 4.00578 32.7284 3.0526 32.0254 2.34958C31.3224 1.64656 30.3692 1.25112 29.375 1.25ZM30.625 36.25H9.375V18.75H30.625V36.25ZM30.625 16.25H9.375V5C9.37539 4.6686 9.50722 4.35089 9.74155 4.11655C9.97589 3.88222 10.2936 3.75039 10.625 3.75H29.375C29.7064 3.75039 30.0241 3.88222 30.2584 4.11655C30.4928 4.35089 30.6246 4.6686 30.625 5V16.25Z"
            fill="hsla(211,84%,30%,85%)"
          />
          <path
            d="M11.25 21.875H13.75V29.375H11.25V21.875ZM11.25 8.125H13.75V13.125H11.25V8.125Z"
            fill="hsla(211,84%,30%,85%)"
          />
        </svg>
      )}
    </div>
  );
};

export default Fridge;
