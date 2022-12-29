import { Picture } from '../picDisplay/PicDisplay';

import bday1 from '../../public/events/birthday-example1.jpeg';
import bday2 from '../../public/events/birthday-example2.jpeg';
import bday3 from '../../public/events/birthday-example3.jpeg';
import grad1 from '../../public/events/graduation-example1.jpeg';
import grad2 from '../../public/events/graduation-example2.jpeg';
import wedding1 from '../../public/events/wedding-example1.jpeg';
import wedding2 from '../../public/events/wedding-example2.jpeg';

enum EventType {
  birthday = 'birthday',
  weddings_and_anniversaries = 'wedding_and_anniversaries',
  graduations = 'graduations',
}

export interface EventData {
  eventType: EventType;
  mainDescription: string;
  pictureSlice: Picture[];
}

export type EventDataRecord = Record<string, EventData>;

const birthdayDescription =
  'Looking to celebrate your birthday in style? We can set up your room for the occasion! The perfect complement after a night on court street.';

const birthday: EventData = {
  eventType: EventType.birthday,
  mainDescription: birthdayDescription,
  pictureSlice: [
    {
      id: 'a1',
      url: bday1,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.16] saturation-[1.05]',
    },
    {
      id: 'a3',
      url: bday3,
      description: 'desc of image 2',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
    },
    {
      id: 'a2',
      url: bday2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.35] saturation-[1.12]',
    },
  ],
};

const weddingsAndAnniversariesDescription =
  "Congratulations on such an amazing milestone together! We're so excited to help make your special day special. Give us a call and we'll decorate your room to set the vibe";

const weddingsAndAnniversaries: EventData = {
  eventType: EventType.weddings_and_anniversaries,
  mainDescription: weddingsAndAnniversariesDescription,
  pictureSlice: [
    {
      id: 'b2',
      url: wedding2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.28] saturation-[1.18]',
    },
    {
      id: 'b1',
      url: wedding1,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.28] saturation-[1.18]',
    },
    {
      id: 'b3',
      url: bday3,
      description: 'desc of image 3',
      imageClasses: 'brightness-[1.28] saturation-[1.18]',
    },
  ],
};

const graduationDescription =
  "Well done on graduation! You finally made it 🎊! Book a stay in one of our events, and we'll design it in a way that helps you celebrate your amazing academic achievement";

const graduations: EventData = {
  eventType: EventType.graduations,
  mainDescription: graduationDescription,
  pictureSlice: [
    {
      id: 'c2',
      url: grad2,
      description: 'desc of Image 2',
      imageClasses: 'brightness-[1.12] saturation-[1.06]',
    },
    {
      id: 'c1',
      url: grad1,
      description: 'desc of Image 1',
      imageClasses: 'brightness-[1.24] saturation-[1.14]',
    },
    {
      id: 'c3',
      url: bday3,
      description: 'desc of Image 3',
      imageClasses: 'brightness-[1.12] saturation-[1.06]',
    },
  ],
};

const eventDataSlice: EventDataRecord = {
  1: birthday,
  2: weddingsAndAnniversaries,
  3: graduations,
};

export default eventDataSlice;
