import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import { Link as ReactScrollLink } from 'react-scroll';
import { useFocusedSection } from '../focusedSectionProvider/FocusedSectionProvider';
import { navlinks } from './navlinks';

let timer: NodeJS.Timeout | undefined = undefined;

const DesktopNav = () => {
  const { refs } = useFocusedSection();
  const router = useRouter();

  const updateURL = (target: string) => () => {
    const update = () => {
      router.push({ hash: target }, undefined, { shallow: true });
    };

    if (timer === undefined) clearTimeout(timer);

    timer = setTimeout(update, 0);
  };

  return (
    <nav className="absolute -z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <ul className="flex flex-row gap-[3vw] lg:gap-[5vw] xl:gap-[6vw] justify-center items-center">
        {navlinks.map((navlink, index) => {
          const activeClass = refs[navlink.label].active
            ? 'p-2 bg-[hsla(211,84%,49%,10%)] text-blue-deep font-semibold rounded-full'
            : 'p-2 rounded-full';

          return (
            <li key={navlink.route} onClick={updateURL(navlink.route)}>
              <motion.div
                variants={getVariants(index * 0.1)}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.07, transitionDuration: '0.1s' }}
                className="select-none text-gray-link py-3"
              >
                <ReactScrollLink
                  to={navlink.route}
                  className={`outline-offset-4 ${activeClass}`}
                  spy={true}
                  smooth={true}
                  offset={navlink.route === 'hero' ? -80 : 0}
                  duration={380}
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
      scale: 0.3,
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
  };
};

export default DesktopNav;
