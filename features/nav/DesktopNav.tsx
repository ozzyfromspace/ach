import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import { Link as ReactScrollLink } from 'react-scroll';
import { navlinks } from './navlinks';

let timer: NodeJS.Timeout | undefined = undefined;
interface Props {
  isHome: boolean;
}

const DesktopNav = (props: Props) => {
  const { isHome } = props;
  const router = useRouter();

  const updateURL = (target: string) => () => {
    const update = () => {
      router.push({ hash: target }, undefined, { shallow: true });
    };

    if (timer === undefined) clearTimeout(timer);

    timer = setTimeout(update, 0);
  };

  return (
    <nav className="flex justify-center items-center">
      <ul className="flex flex-row gap-[1vw] lg:gap-[2vw] xl:gap-[4vw] justify-center items-center">
        {navlinks.map((navlink, index) => {
          return (
            <li key={navlink.route} onClick={updateURL(navlink.route)}>
              {isHome ? (
                <motion.div
                  variants={getVariants(index * 0.1)}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.07, transitionDuration: '0.1s' }}
                  className="select-none text-gray-link py-3"
                >
                  <ReactScrollLink
                    to={navlink.landmark}
                    className="outline-offset-4 p-2 rounded-full"
                    spy={true}
                    smooth={true}
                    offset={navlink.route === 'rooms' ? -150 : -180}
                    duration={380}
                    href={`/${navlink.route}`}
                  >
                    {navlink.label}
                  </ReactScrollLink>
                </motion.div>
              ) : (
                <a
                  className="select-none text-gray-link py-3 hover:scale-105 duration-100"
                  href={navlink.route === 'hero' ? '/' : '/#' + navlink.route}
                >
                  {navlink.label}
                </a>
              )}
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
