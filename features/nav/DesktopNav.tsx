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
    <nav>
      <ul className="flex flex-row gap-[7vw] justify-center items-center">
        {navlinks.map((navlink) => (
          <li
            key={navlink.route}
            className="hover:scale-[1.05] hover:transition-transform duration-200 ease-out"
          >
            <button>
              <ReactScrollLink
                to={navlink.route}
                activeClass="active-link"
                spy={true}
                smooth={true}
                offset={-80}
                duration={450}
                onClick={updateURL(navlink.route)}
              >
                <p className="text-lg">{toTitleCase(navlink.label)}</p>
              </ReactScrollLink>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

function toTitleCase(input: string): string {
  const first = input[0].toUpperCase();
  const last = input.toLowerCase().slice(1);
  return `${first}${last}`;
}

export default DesktopNav;
