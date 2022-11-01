import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link as ReactScrollLink } from 'react-scroll';
import { MOBILE_MEDIA_QUERY } from '../../constants';
import Button from '../button';
import ClosedMobileNav from './ClosedMobileNav';
import DesktopNav from './DesktopNav';
import MenuModal from './MenuModal';

const Nav = () => {
  const router = useRouter();

  const isMobile = useMediaQuery({
    query: MOBILE_MEDIA_QUERY,
  });

  const [mobile, setMobile] = useState(() => true);
  const [open, setOpen] = useState(() => false);

  const onOpen = useCallback(() => setOpen(() => true), []);
  const onClose = useCallback(() => setOpen(() => false), []);

  useEffect(() => {
    setMobile(() => isMobile);
  }, [isMobile]);

  const updateURL = () => {
    const update = () => router.push({ pathname: '' });
    setTimeout(update, 0);
  };

  return (
    <header className="fixed z-10 top-0 left-0 right-0 pt-4 pb-4 pl-6 pr-6 h-20 flex justify-between items-center bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 shadow-sm">
      <button>
        <ReactScrollLink
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={450}
          onClick={updateURL}
        >
          <p>LOGO</p>
        </ReactScrollLink>
      </button>
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
          <Button label="Reserve" />
        </Link>
      )}
    </header>
  );
};

export default Nav;
