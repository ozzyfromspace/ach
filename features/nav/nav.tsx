import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TABLET_MEDIA_QUERY, bookingLink } from '../../constants';
import { useScrollBlock } from '../../hooks/useScrollBlock';
import useStickyState from '../../hooks/useStickState';
import Button from '../button';
import ClosedMobileNav from './ClosedMobileNav';
import DesktopNav from './DesktopNav';
import MenuModal from './MenuModal';

interface Props {
  // aboutHeaderInView: boolean;
  isHome: boolean;
}

const Nav = (props: Props) => {
  const { isHome } = props;
  const contactStickyState = useStickyState();
  const router = useRouter();

  const isMobiTablet = useMediaQuery({
    query: TABLET_MEDIA_QUERY,
  });

  const [firstRender, setFirstRender] = useState(() => true);
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
    if (!firstRender) return;

    setFirstRender(() => false);
  }, [firstRender]);

  const updateURL = () => {
    console.log('click!');
    const update = () => router.push({ pathname: '' });
    setTimeout(update, 0);
  };

  return (
    <header
      className={`fixed z-[200] font-subtitle bottom-0 left-0 right-0 pt-4 pb-4 pl-6 pr-6 h-20 flex justify-between items-center ${
        contactStickyState.isSticky
          ? 'bg-[hsla(60,30%,96%,100%)]'
          : 'bg-[hsl(60,30%,96%)] bg-opacity-90 backdrop-filter backdrop-blur-sm'
      }`}
    >
      {/* {isHome ? (
        <ReactScrollLink
          aria-label="go to home page"
          to="hero"
          spy={true}
          smooth={true}
          className="p-2 -m-2 rounded-full select-none"
          offset={-96}
          duration={350}
          onClick={updateURL}
          href="/"
        >
          <HomeIcon />
        </ReactScrollLink>
      ) : (
        <Link href="/">
          <HomeIcon />
        </Link>
      )} */}
      {/* {!firstRender && isMobiTablet && <LinkCallButton />} */}
      {!firstRender && isMobiTablet && (
        <div className="mr-auto">
          <a href={bookingLink} tabIndex={-1} aria-label="Book Now">
            <Button
              label="Book A Room Now"
              className="max-w-fit mr-auto"
              selected
            />
          </a>
        </div>
      )}
      {!firstRender && isMobiTablet ? (
        <React.Fragment>
          <AnimatePresence>
            {open && (
              <MenuModal
                onClose={onClose}
                key={open ? 'open' : 'closed'}
                isClosed={!open}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!open && (
              <ClosedMobileNav onOpen={onOpen} key={open ? 'open' : 'closed'} />
            )}
          </AnimatePresence>
        </React.Fragment>
      ) : (
        <div className="relative">
          <DesktopNav isHome={isHome} />
        </div>
      )}
      {!firstRender && !isMobiTablet && isHome && (
        <a
          href={bookingLink}
          aria-label="Book Now"
          tabIndex={-1}
          target="_blank"
          rel="noreferrer"
        >
          <Button label="Book a Room Now" className="md:w-32 lg:w-36 xl:w-48" />
        </a>
      )}
    </header>
  );
};

export default Nav;
