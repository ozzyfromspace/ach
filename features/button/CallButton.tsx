import { useRef } from 'react';
import { EMAIL_DATA, PHONE_DATA } from '../../constants';

const CallButton = () => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleClick = () => {
    linkRef.current?.click();
  };

  return (
    <button
      onClick={handleClick}
      className="flex justify-center items-center gap-1 min-w-max font-subtitle font-medium tracking-wide p-2 pl-6 pr-6 w-1/3 max-w-sm text-xl sm:text-lg bg-[white] text-gray-link border-[1px] border-[hsl(0,0%,84%,100%)] rounded-[0.25rem] hover:scale-[0.989] hover:bg-[hsla(0,0%,0%,84%,84%)] duration-150 ease-out transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path
          fillRule="evenodd"
          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
          clipRule="evenodd"
        />
      </svg>
      <a href={PHONE_DATA.href} ref={linkRef} className="text-base">
        {PHONE_DATA.label}
      </a>
    </button>
  );
};

interface LinkCallButtonProps {
  buttonData: {
    href: string;
    label: string;
  };
  darkMode: boolean;
  size: 'large' | 'small';
  underline: boolean;
}

export const LinkCallButton = (props: LinkCallButtonProps) => {
  const { buttonData: tempButtonData, darkMode, size, underline } = props;

  const buttonData = {
    href: tempButtonData.href || PHONE_DATA.href,
    label: tempButtonData.label || PHONE_DATA.label,
  };

  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleClick = () => {
    console.log('clicked!');
    linkRef.current?.click();
  };

  const textColor = darkMode ? 'text-[hsla(0,0%,100%,75%)]]' : 'text-gray-link';

  return (
    <button
      onClick={handleClick}
      className="flex justify-center items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${
          size === 'large' ? 'w-5 h-5' : 'w-4 h-4'
        } ${textColor} font-normal mt-[0.15rem]`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            buttonData.label === PHONE_DATA.label
              ? 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
              : buttonData.label === EMAIL_DATA.label
              ? 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
              : 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
          }
        />
      </svg>
      <a
        href={buttonData.href}
        ref={linkRef}
        className={`font-title ${
          size === 'large' ? 'text-xl font-normal' : 'text-base font-normal'
        } ${textColor} ${
          underline
            ? 'border-b-[1px] border-b-[hsla(0,0%,69%,100%)] pb-1 mt-1'
            : ''
        }`}
      >
        {buttonData.label}
      </a>
    </button>
  );
};

LinkCallButton.defaultProps = {
  buttonData: {
    href: '',
    label: '',
  },
  darkMode: false,
  size: 'large',
  underline: true,
};

export default CallButton;
