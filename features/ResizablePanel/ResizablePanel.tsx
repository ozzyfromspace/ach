import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

interface ResizablePanelProps {
  children: React.ReactNode;
}

export default function ResizablePanel({ children }: ResizablePanelProps) {
  let [ref, { height }] = useMeasure();

  return (
    <motion.div
      animate={{ height: height || 'auto' }}
      className="relative overflow-hidden"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <div
            ref={ref}
            className={`${
              height ? 'absolute' : 'relative top-0 left-0'
            } w-full`}
          >
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.
  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (key.startsWith('_')) return; // Don't compare React's internal props.
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};
