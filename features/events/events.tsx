import { AnimatePresence } from 'framer-motion';
import { useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactScrollLink } from 'react-scroll';
import useStickyState from '../../hooks/useStickState';
import { CallButton } from '../button';
import {
  currentEventSelector,
  eventSelector,
} from '../eventPicker/eventPickerSlice';
import { useFocusedSection } from '../focusedSectionProvider/FocusedSectionProvider';
import Padding from '../padding';
import PicDisplay from '../picDisplay';
import eventDataSlice from './eventDataSlice';

const Events = () => {
  const id = useId();
  const events = useSelector(eventSelector);
  const {
    refs: { Events: eventsFocusingDescriptor },
  } = useFocusedSection();
  const currentEvent = useSelector(currentEventSelector);
  const [exiting, setExiting] = useState(() => false);

  const dispatch = useDispatch();
  const key = `${eventDataSlice[currentEvent.id].eventType}${id}`;
  const { isSticky, ref } = useStickyState();

  return (
    <div
      ref={eventsFocusingDescriptor.ref}
      className="relative z-[1] w-full min-h-fit rounded-t-lg"
      id="events"
    >
      <div className="w-full">
        <div
          ref={ref}
          className={`${
            isSticky
              ? 'bg-[hsl(60,30%,96%)] bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-sm'
              : ''
          } w-screen sticky top-20 z-10 font-title select-none tracking-wider text-blue-deep text-2xl sm:text-3xl md:text-3xl font-normal mt:text-center flex flex-col justify-center pb-5 h-20`}
        >
          <Padding className="flex justify-center items-center">
            <ReactScrollLink
              to="events-content"
              spy={true}
              smooth={true}
              offset={-180}
              className="p-2 rounded-full outline-offset-4"
              duration={380}
              href="/events"
            >
              <h2>Events</h2>
            </ReactScrollLink>
          </Padding>
        </div>
        <Padding id="events-content">
          <div className="mt:flex flex-col flex-wrap justify-center items-center mt-8">
            {/* <nav className="flex flex-row flex-wrap gap-3">
              {events.map((event) => {
                const handleUpdateSelectedEvent = () => {
                  if (exiting) return;
                  dispatch(updateSelectedJobModel(event.id));
                  setExiting(() => true);
                };
                return (
                  <Button
                    key={event.id}
                    handleClick={handleUpdateSelectedEvent}
                    label={event.name}
                    selected={event.selected}
                    className="shadow-sm"
                  />
                );
              })}
            </nav> */}
            <p className="text-xl pb-3">Celebrating something?</p>
            <p className="font-subtitle">
              We can decorate your room & set the vibe
            </p>
            <div className="flex flex-col justify-center items-center gap-8">
              <div className="select-none flex justify-center items-center aspect-[4/3] w-full mt:min-w-[20rem] mt:w-[min(69vw,69vh)] mt:max-w-xl mt-10 md:mt-12 xl:mt-14">
                <AnimatePresence
                  mode="sync"
                  onExitComplete={() => setExiting(() => false)}
                >
                  {!exiting && (
                    <PicDisplay
                      gallery={false}
                      key={key}
                      resourceData={
                        eventDataSlice[currentEvent.id].pictureSlice
                      }
                      galleryOpen={true}
                      setGalleryOpen={() => {}}
                      mainDescriptionArray={[]}
                      capacity=""
                      truncatedDescription=""
                    />
                  )}
                </AnimatePresence>
              </div>
              <div className="w-max max-w-fit min-h-full flex flex-col gap-3 justify-center items-center mb-24">
                <p className="select-none font-subtitle font-medium text-lg text-gray-dark">
                  Call to set up an event
                </p>
                <CallButton />
              </div>
            </div>
          </div>
        </Padding>
      </div>
    </div>
  );
};

export default Events;
