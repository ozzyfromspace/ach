import { motion, Variants } from 'framer-motion';

interface Props {
  onOpen: () => void;
}

const ClosedMobileNav = (props: Props) => {
  const { onOpen } = props;

  return (
    <nav>
      <button onClick={onOpen}>
        <motion.svg
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          className="w-8 h-8 text-gray-link"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ scale: 0.95, transitionDuration: '0.1s' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </motion.svg>
      </button>
    </nav>
  );
};

export default ClosedMobileNav;

const variants: Variants = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 0.3 },
  },
  exit: { opacity: 0, pathLength: 0, transition: { delay: 0, duration: 0.3 } },
};
