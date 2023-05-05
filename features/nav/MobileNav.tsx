import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import { Link as ReactScrollLink } from 'react-scroll';
import { navlinks } from './navlinks';

let timer: NodeJS.Timeout | undefined = undefined;

interface Props {
  onClose: () => void;
}

const MobileNav = (props: Props) => {
  const { onClose } = props;
  const router = useRouter();

  const updateURL = (target: string) => () => {
    const update = () => {
      router.push({ hash: target }, undefined, { shallow: true });
    };

    if (timer !== undefined) clearTimeout(timer);

    timer = setTimeout(update, 0);
  };

  return (
    <nav className="absolute z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <ul className="flex flex-col gap-[8vh] justify-center items-center">
        {navlinks.map((navlink, index) => {
          // active - 'text-blue-dark font-semibold bg-[hsla(211,84%,90%,90%)] rounded-full';
          const activeClass = '';

          return (
            <li key={navlink.route} onClick={updateURL(navlink.route)}>
              <motion.div
                variants={getVariants(index * 0.1)}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover={{ scale: 1.07, transitionDuration: '0.1s' }}
                className="text-[hsla(228,26%,96%,80%)] font-light"
              >
                <ReactScrollLink
                  to={navlink.landmark}
                  className={`outline-offset-4 rounded-full p-3 ${activeClass}`}
                  spy={true}
                  smooth={true}
                  offset={navlink.route === 'rooms' ? -150 : -180}
                  duration={380}
                  onClick={() => {
                    setTimeout(onClose, 420);
                  }}
                  href={`/${navlink.route}`}
                >
                  {navlink.label}
                </ReactScrollLink>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const getVariants = (delay: number): Variants => {
  return {
    initial: {
      y: '1rem',
      opacity: 0,
      scale: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        type: 'spring',
        mass: 0.2,
        damping: 10,
      },
    },
    exit: {
      y: '1rem',
      opacity: 0,
      scale: 0,
      transition: {
        delay: delay,
        type: 'spring',
        mass: 0.2,
        damping: 10,
      },
    },
  };
};

export default MobileNav;
