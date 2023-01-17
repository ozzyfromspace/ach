import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

let timer: NodeJS.Timer | undefined = undefined;
const RANDOM_INIT_BOTTOM_MARGIN = 100000;
const proximity = 1;

interface Props {
  root: Element | null | undefined;
  bottomRootMarginPx: number;
}

export interface StickyState {
  ref: (node?: Element | null | undefined) => void;
  isSticky: boolean;
}

const useStickyState = (
  props: Props = { root: null, bottomRootMarginPx: 80 }
): StickyState => {
  const { bottomRootMarginPx, root } = props;
  const [bottomMargin, setBottomMargin] = useState(
    () => RANDOM_INIT_BOTTOM_MARGIN
  );

  useEffect(() => {
    if (!window) return;

    if (bottomMargin === RANDOM_INIT_BOTTOM_MARGIN) {
      setBottomMargin(
        () => window.innerHeight - proximity * bottomRootMarginPx
      );
    }

    const getWindowHeight = () => {
      if (!timer) {
        clearTimeout(timer);
        timer = undefined;
      }

      timer = setTimeout(() => {
        setBottomMargin(
          () => window.innerHeight - proximity * bottomRootMarginPx
        );
      }, 100);
    };

    window.addEventListener('resize', getWindowHeight);

    return () => {
      window.removeEventListener('resize', getWindowHeight);
    };
  }, [bottomMargin, bottomRootMarginPx]);

  const { ref, inView } = useInView({
    root,
    threshold: 0,
    rootMargin: `0px 0px -${bottomMargin}px 0px`,
  });

  return {
    ref,
    isSticky: inView,
  };
};

export default useStickyState;
