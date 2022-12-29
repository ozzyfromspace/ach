import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link as ReactScrollLink } from 'react-scroll';
import { TABLET_MEDIA_QUERY } from '../../constants';
import { useScrollBlock } from '../../hooks/useScrollBlock';
import Button, { LinkCallButton } from '../button';
import ClosedMobileNav from './ClosedMobileNav';
import DesktopNav from './DesktopNav';
import MenuModal from './MenuModal';

const Nav = () => {
  const router = useRouter();

  const isMobiTablet = useMediaQuery({
    query: TABLET_MEDIA_QUERY,
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
    <header className="fixed font-subtitle z-10 top-0 left-0 right-0 pt-4 pb-4 pl-6 pr-6 h-20 flex justify-between items-center bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[0.55] shadow-sm">
      <button>
        <ReactScrollLink
          to="hero"
          spy={true}
          smooth={true}
          offset={-96}
          duration={350}
          onClick={updateURL}
        >
          <p className="font-extrabold">LOGO</p>
        </ReactScrollLink>
      </button>
      {mobile && <LinkCallButton />}
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
