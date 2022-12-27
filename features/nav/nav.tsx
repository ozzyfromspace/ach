import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link as ReactScrollLink } from 'react-scroll';
import { MOBITABLET_MEDIA_QUERY } from '../../constants';
import { useScrollBlock } from '../../hooks/useScrollBlock';
import Button from '../button';
import ClosedMobileNav from './ClosedMobileNav';
import DesktopNav from './DesktopNav';
import MenuModal from './MenuModal';

const Nav = () => {
  const router = useRouter();

  const isMobiTablet = useMediaQuery({
    query: MOBITABLET_MEDIA_QUERY,
  });

  const [mobile, setMobile] = useState(() => true);
  const [open, setOpen] = useState(() => false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const onOpen = useCallback(() => setOpen(() => true), []);
  const onClose = useCallback(() => setOpen(() => false), []);

  useEffect(() => {
    if (!open) {
      allowScroll();
      return;
    }

    blockScroll();
  }, [open, allowScroll, blockScroll]);

  useEffect(() => {
    setMobile(() => isMobiTablet);
  }, [isMobiTablet]);

  useEffect(() => {}, []);

  const updateURL = () => {
    const update = () => router.push({ pathname: '' });
    setTimeout(update, 0);
  };

  return (
    <header className="fixed z-10 top-0 left-0 right-0 pt-4 pb-4 pl-6 pr-6 h-20 flex justify-between items-center bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[0.55] shadow-sm">
      <button>
        <ReactScrollLink
          to="hero"
          spy={true}
          smooth={true}
          offset={-80}
          duration={350}
          onClick={updateURL}
        >
          <p className="font-extrabold">LOGO</p>
        </ReactScrollLink>
      </button>
      {mobile && (
        <button className="flex justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-link mt-[0.15rem]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <a
            href="tel:+12202211795"
            className="font-subtitle font-normal text-base text-gray-link underline underline-offset-2"
          >
            220-221-1795
          </a>
        </button>
      )}
      {mobile ? (
        <React.Fragment>
          <AnimatePresence>
            {open && (
              <MenuModal onClose={onClose} key={open ? 'open' : 'closed'} />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!open && (
              <ClosedMobileNav onOpen={onOpen} key={open ? 'open' : 'closed'} />
            )}
          </AnimatePresence>
        </React.Fragment>
      ) : (
        <DesktopNav />
      )}
      {!mobile && (
        <Link href="/book">
          <Button label="Book" className="md:w-32 lg:w-36 xl:w-48" />
        </Link>
      )}
    </header>
  );
};

export default Nav;
