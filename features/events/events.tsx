import { useRef } from 'react';
import { EventPicker } from '../eventPicker';
import Padding from '../padding';

const Events = () => {
  const localRef = useRef<HTMLButtonElement>(null);

  return (
    <Padding
      className="relative w-full min-h-fit rounded-t-lg mt-8 bg-[hsl(0,0%,94%)] mb-144"
      id="about"
    >
      <div className="w-full" id="events">
        <h2 className="font-title tracking-wider text-gray-dark text-2xl sm:text-3xl md:text-4xl font-medium mb-8 mt:text-center">
          Events
        </h2>
        <div className="mt:flex justify-center">
          <EventPicker
            localRef={localRef}
            label="You deserve this. Pick an event."
          />
        </div>
      </div>
    </Padding>
  );
};

export default Events;
