import { createClient } from 'contentful';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link as ReactScrollLink } from 'react-scroll';
import { CallButton } from '../button';
import Padding from '../padding';
import PicDisplay from '../picDisplay';
import { Picture } from '../picDisplay/PicDisplay';
import { ContentfulImage } from '../rooms/rooms';

interface EventsProps {
  eventTitle: string;
  eventSubtitle: string;
  sectionText: string;
  images: Picture[];
}

export interface EventsData extends EventsProps {}

const Events = (props: EventsProps) => {
  const { eventTitle, eventSubtitle, sectionText, images } = props;
  const [exiting, setExiting] = useState(() => false);

  return (
    <div className="relative z-[1] w-full min-h-fit rounded-t-lg" id="events">
      <div className="w-full">
        <div className="bg-[hsl(60,30%,96%)] bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-sm w-full sticky top-[4.95rem] z-10 font-title select-none tracking-wider text-blue-deep text-2xl sm:text-3xl md:text-3xl font-normal mt:text-center flex flex-col justify-center py-5 mt-10 h-20">
          <Padding className="flex flex-col items-center justify-center">
            <ReactScrollLink
              to="events-content"
              spy={true}
              smooth={true}
              offset={-150}
              duration={380}
              className="p-2 rounded-full outline-offset-4"
              href="/#events"
            >
              <h2>{eventTitle}</h2>
            </ReactScrollLink>
          </Padding>
        </div>
        <Padding id="events-content">
          <div className="flex-col flex-wrap items-center justify-center pt-8 mt:flex">
            <p className="pb-3 text-xl">{eventSubtitle}</p>
            <p className="font-subtitle">{sectionText}</p>
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="select-none flex justify-center items-center aspect-[4/3] w-full mt:min-w-[20rem] mt:w-[min(69vw,69vh)] mt:max-w-xl mt-10 md:mt-12 xl:mt-14">
                <AnimatePresence
                  mode="sync"
                  onExitComplete={() => setExiting(() => false)}
                >
                  {!exiting && (
                    <PicDisplay
                      gallery={false}
                      resourceData={images}
                      galleryOpen={true}
                      setGalleryOpen={() => {}}
                      mainDescriptionArray={[]}
                      capacity=""
                      truncatedDescription=""
                    />
                  )}
                </AnimatePresence>
              </div>
              <div className="flex flex-col items-center justify-center min-h-full gap-3 mb-24 w-max max-w-fit">
                <p className="text-lg font-medium select-none font-subtitle text-gray-dark">
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

const entityId = '1mW5pqv8vwNj6pk0xv61fR';
interface Entry {
  fields: {
    eventTitle: string;
    subtitle: string;
    sectionText: string;
    images: ContentfulImage[];
  };
}

export async function getEventsDataFromContentful() {
  const client = createClient({
    space: 'whrqes1tuvv5',
    accessToken: 'V_ajOeV3uMRT1T9cWIVOONxCr9Q8q75yA0NF5RgMnTU',
  });

  const eventsData: EventsProps = {
    eventTitle: '',
    eventSubtitle: '',
    sectionText: '',
    images: [],
  };

  try {
    const entry = (await client.getEntry(entityId)) as Entry;
    eventsData.eventTitle = entry.fields.eventTitle;
    eventsData.eventSubtitle = entry.fields.subtitle;
    eventsData.sectionText = entry.fields.sectionText;
    eventsData.images = entry.fields.images.map((im) => ({
      id: im.sys.id,
      description: '',
      imageClasses: '',
      priority: false,
      url: `https:${im.fields.file.url}`,
    }));
  } catch (error) {
    console.log(error);
  }

  return eventsData;
}
