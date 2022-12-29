import { AnimatePresence } from 'framer-motion';
import { useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { CallButton } from '../button';
import { updateSelectedJobModel } from '../eventPicker';
import {
  currentEventSelector,
  eventSelector,
} from '../eventPicker/eventPickerSlice';
import Padding from '../padding';
import PicDisplay from '../picDisplay';
// import EventCard from './EventCard';
import eventDataSlice from './eventDataSlice';

// const

const Events = () => {
  const id = useId();
  const events = useSelector(eventSelector);
  const currentEvent = useSelector(currentEventSelector);
  const [exiting, setExiting] = useState(() => false);

  const dispatch = useDispatch();
  const key = `${eventDataSlice[currentEvent.id].eventType}${id}`;

  return (
    <Padding
      className="relative z-[1] w-full min-h-fit rounded-t-lg pt-24 mb-16"
      id="events"
    >
      <div className="w-full">
        <h2 className="font-title tracking-wider text-blue-deep text-2xl sm:text-3xl md:text-3xl font-normal mb-8 mt:text-center pb-6">
          Events
        </h2>
        <div className="mt:flex flex-col flex-wrap justify-center items-center">
          <nav className="flex flex-row flex-wrap gap-3">
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
          </nav>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex justify-center items-center event-width-clamp aspect-[4/3] w-full mt:min-w-[20rem] mt:w-[min(69vw,69vh)] mt:max-w-xl mt-10 md:mt-12 xl:mt-14">
              <AnimatePresence
                mode="sync"
                onExitComplete={() => setExiting(() => false)}
              >
                {!exiting && (
                  <PicDisplay
                    key={key}
                    resourceData={eventDataSlice[currentEvent.id].pictureSlice}
                  />
                )}
              </AnimatePresence>
            </div>
            <div className="w-max max-w-fit min-h-full flex flex-col gap-6 justify-center items-center">
              <p className="font-subtitle font-medium text-lg text-gray-dark">
                Call to set up an event
              </p>
              <CallButton />
            </div>
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default Events;
