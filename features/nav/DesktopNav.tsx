import { useRouter } from 'next/router';
import { Link as ReactScrollLink } from 'react-scroll';
import { navlinks } from './navlinks';

const DesktopNav = () => {
  const router = useRouter();
  let timer: NodeJS.Timeout | undefined = undefined;

  const updateURL = (target: string) => () => {
    const update = () => {
      router.push({ hash: target }, undefined, { shallow: true });
    };

    if (timer === undefined) clearTimeout(timer);
    timer = setTimeout(update, 0);
  };

  return (
    <nav className="absolute -z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <ul className="flex flex-row gap-[7vw] justify-center items-center">
        {navlinks.map((navlink) => (
          <li key={navlink.route}>
            <button className="hover:scale-105 transition-transform ease-in-out duration-200">
              <ReactScrollLink
                to={navlink.route}
                activeClass="active-link"
                spy={true}
                smooth={true}
                offset={navlink.route === 'hero' ? -80 : 0}
                duration={450}
                onClick={updateURL(navlink.route)}
              >
                {navlink.label}
              </ReactScrollLink>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
