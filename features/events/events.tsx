import { useRef } from 'react';
import { EventPicker } from '../eventPicker';
import Padding from '../padding';
import EventCard from './EventCard';
import eventDataSlice from './eventDataSlice';

const Events = () => {
  const localRef = useRef<HTMLButtonElement>(null);

  return (
    <Padding
      className="relative w-full min-h-fit rounded-t-lg mt-8 bg-[hsl(0,0%,94%)]"
      id="events"
    >
      <div className="w-full" id="events">
        <h2 className="font-title tracking-wider text-gray-dark text-2xl sm:text-3xl md:text-4xl font-medium mb-8 mt:text-center">
          Events
        </h2>
        <div className="mt:flex flex-col flex-wrap justify-center items-center">
          <EventPicker
            localRef={localRef}
            label="You deserve this. Pick an event."
          />
          <div className="flex justify-center items-center w-[65rem] event-width-clamp aspect-[4/3] mt-8 mb-12">
            <EventCard
              key={eventDataSlice[0].eventType}
              roomData={eventDataSlice[0]}
            />
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default Events;
