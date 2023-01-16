import { createContext, useContext } from 'react';

interface OverlapValue {
  overlapRef: React.MutableRefObject<HTMLDivElement | null>;
}

const defaultOverlapValue: OverlapValue = {
  overlapRef: { current: null },
};

const OverlapContext = createContext<OverlapValue>(defaultOverlapValue);

interface OverlapProps {
  overlapRef: React.MutableRefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

const OverlapProvider = (props: OverlapProps) => {
  const { children, overlapRef } = props;

  return (
    <OverlapContext.Provider value={{ overlapRef: overlapRef }}>
      {children}
    </OverlapContext.Provider>
  );
};

export const useOverlapValue = () => useContext(OverlapContext);
export default OverlapProvider;
