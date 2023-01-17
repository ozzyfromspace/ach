import { useWindowHeight } from '@react-hook/window-size';
import { createContext, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { navlinks } from '../nav/navlinks';

interface FocusedSectionProviderProps {
  children: React.ReactNode;
}

export const sectionRefName = {
  home: navlinks[0].label,
  rooms: navlinks[1].label,
  amenities: navlinks[2].label,
  events: navlinks[3].label,
  contact: navlinks[4].label,
} as const;

interface RefDescription {
  ref: (node?: Element | null | undefined) => void;
  active: boolean;
}

interface FocusedSectionValueRefs {
  [sectionRefName.home]: RefDescription;
  [sectionRefName.rooms]: RefDescription;
  [sectionRefName.amenities]: RefDescription;
  [sectionRefName.events]: RefDescription;
  [sectionRefName.contact]: RefDescription;
}

interface FocusedSectionValue {
  refs: FocusedSectionValueRefs;
}

const refDescription: RefDescription = {
  ref: () => null,
  active: false,
};

const defaultFocusedSectionValue: FocusedSectionValue = {
  refs: {
    Home: { ...refDescription, active: true },
    Rooms: refDescription,
    Amenities: refDescription,
    Events: refDescription,
    Contact: refDescription,
  },
};

const FocusedSectionContext = createContext(defaultFocusedSectionValue);

const FocusedSectionProvider = (props: FocusedSectionProviderProps) => {
  const { children } = props;

  const windowHeight = useWindowHeight();
  const bottomPx = Math.round(windowHeight / 2);

  const { ref: homeRef } = useInView({
    rootMargin: `0px 0px -${bottomPx}px 0px`,
  });
  const { ref: roomsRef, inView: roomsInView } = useInView({
    rootMargin: `0px 0px -${bottomPx}px 0px`,
  });
  const { ref: amenitiesRef, inView: amenitiesInView } = useInView({
    rootMargin: `0px 0px -${bottomPx}px 0px`,
  });
  const { ref: eventsRef, inView: eventsInView } = useInView({
    rootMargin: `0px 0px -${bottomPx}px 0px`,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    rootMargin: `0px 0px -${bottomPx}px 0px`,
  });

  const refs: FocusedSectionValueRefs = {
    Home: { ref: homeRef, active: false },
    Rooms: { ref: roomsRef, active: false },
    Amenities: { ref: amenitiesRef, active: false },
    Events: { ref: eventsRef, active: false },
    Contact: { ref: contactRef, active: false },
  };

  type ActiveRefName =
    | typeof sectionRefName.home
    | typeof sectionRefName.rooms
    | typeof sectionRefName.amenities
    | typeof sectionRefName.events
    | typeof sectionRefName.contact;
  let activeRefName: ActiveRefName = sectionRefName.home;

  if (contactInView) {
    activeRefName = sectionRefName.contact;
  } else if (eventsInView) {
    activeRefName = sectionRefName.events;
  } else if (amenitiesInView) {
    activeRefName = sectionRefName.amenities;
  } else if (roomsInView) {
    activeRefName = sectionRefName.rooms;
  } else {
    activeRefName = sectionRefName.home;
  }

  const newRefDescription: RefDescription = {
    ...refs[activeRefName],
    active: true,
  };

  const focusedSectionContext: FocusedSectionValue = {
    refs: { ...refs, [activeRefName]: newRefDescription },
  };

  return (
    <FocusedSectionContext.Provider value={focusedSectionContext}>
      {children}
    </FocusedSectionContext.Provider>
  );
};

export const useFocusedSection = () => useContext(FocusedSectionContext);

export default FocusedSectionProvider;
