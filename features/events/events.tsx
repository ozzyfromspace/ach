import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button';
import { updateSelectedJobModel } from '../eventPicker';
import {
  currentEventSelector,
  eventSelector,
} from '../eventPicker/eventPickerSlice';
import Padding from '../padding';
import EventCard from './EventCard';
import eventDataSlice from './eventDataSlice';

const Events = () => {
  const events = useSelector(eventSelector);
  const currentEvent = useSelector(currentEventSelector);

  const dispatch = useDispatch();

  return (
    <Padding
      className="relative w-full min-h-fit rounded-t-lg bg-[hsl(0,0%,94%)] pt-24 -mt-8 pb-8"
      id="events"
    >
      <div className="w-full">
        <h2 className="font-title tracking-wider text-gray-dark text-2xl sm:text-3xl md:text-4xl font-medium mb-8 mt:text-center">
          Events
        </h2>
        <div className="mt:flex flex-col flex-wrap justify-center items-center">
          <nav className="flex flex-row flex-wrap gap-3">
            {events.map((event) => {
              const handleUpdateSelectedEvent = () => {
                dispatch(updateSelectedJobModel(event.id));
              };

              return (
                <Button
                  key={event.id}
                  handleClick={handleUpdateSelectedEvent}
                  label={event.name}
                  selected={event.selected}
                />
              );
            })}
          </nav>
          <div className="flex justify-center items-center w-[65rem] event-width-clamp aspect-[4/3] mt-8 mb-12">
            <AnimatePresence mode="wait">
              <EventCard
                key={eventDataSlice[currentEvent.id].eventType}
                roomData={eventDataSlice[currentEvent.id]}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default Events;
