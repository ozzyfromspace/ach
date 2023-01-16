import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

let timer: NodeJS.Timer | undefined = undefined;
const RANDOM_INIT_BOTTOM_MARGIN = 100000;
const remToPx = (rem: number) => 16 * rem;
const navHeight = remToPx(5);
const proximity = 1;

interface Props {
  root: Element | null | undefined;
}

const useStickyState = (props: Props = { root: null }) => {
  const [bottomMargin, setBottomMargin] = useState(
    () => RANDOM_INIT_BOTTOM_MARGIN
  );

  useEffect(() => {
    if (!window) return;

    if (bottomMargin === RANDOM_INIT_BOTTOM_MARGIN) {
      setBottomMargin(() => window.innerHeight - proximity * navHeight);
    }

    const getWindowHeight = () => {
      if (!timer) {
        clearTimeout(timer);
        timer = undefined;
      }

      timer = setTimeout(() => {
        setBottomMargin(() => window.innerHeight - proximity * navHeight);
      }, 100);
    };

    window.addEventListener('resize', getWindowHeight);

    return () => {
      window.removeEventListener('resize', getWindowHeight);
    };
  }, [bottomMargin]);

  const { ref, inView } = useInView({
    root: props.root,
    threshold: 0,
    rootMargin: `0px 0px -${bottomMargin}px 0px`,
  });

  return {
    ref,
    isSticky: inView,
  };
};

export default useStickyState;
