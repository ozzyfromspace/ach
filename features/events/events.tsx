import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { PHONE_DATA } from '../../constants';
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
      className="relative z-0 w-full min-h-fit rounded-t-lg pt-44 -mt-20 pb-8"
      id="events"
    >
      <div className="w-full">
        <h2 className="font-title tracking-wider text-gray-dark text-xl sm:text-2xl md:text-3xl font-light mb-8 mt:text-center pb-6">
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
                  className="shadow-sm"
                />
              );
            })}
          </nav>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-7xl">
            <div className="flex justify-center items-center w-[65rem] event-width-clamp aspect-[4/3]">
              <AnimatePresence mode="wait">
                <EventCard
                  key={eventDataSlice[currentEvent.id].eventType}
                  roomData={eventDataSlice[currentEvent.id]}
                />
              </AnimatePresence>
            </div>
            <div className="w-max max-w-fit min-h-full flex flex-col gap-6 justify-center items-start mt:items-center">
              <p className="font-subtitle font-medium text-lg text-gray-dark">
                Call now to set up an amazing event at the{' '}
                <span className="inline-block w-fit font-subtitle font-bold text-lg text-blue-deep break-keep text-center">
                  Athens Central Hotel
                </span>
              </p>

              <button className="flex justify-center items-center gap-1 min-w-max font-subtitle font-medium tracking-wide p-2 pl-6 pr-6 w-1/3 max-w-sm text-xl sm:text-lg bg-[white] text-gray-link border-[1px] border-[hsl(0,0%,84%,100%)] rounded-[0.25rem] hover:scale-[0.989] hover:bg-[hsla(0,0%,0%,84%,84%)] duration-150 ease-out transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href={PHONE_DATA.href}>{PHONE_DATA.label}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default Events;
