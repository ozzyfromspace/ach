import { Picture } from '../picDisplay/PicDisplay';

import engaged1 from '../../public/events/engaged-1.jpg';
import engaged2 from '../../public/events/engaged-2.jpg';
import engaged3 from '../../public/events/engaged-3.jpg';
import married1 from '../../public/events/married-1.jpg';
import married2 from '../../public/events/married-2.jpg';
import married3 from '../../public/events/married-3.jpg';

enum EventType {
  // birthday = 'birthday',
  weddings_and_anniversaries = 'wedding_and_anniversaries',
  // graduations = 'graduations',
}

export interface EventData {
  eventType: EventType;
  mainDescription: string;
  pictureSlice: Picture[];
}

export type EventDataRecord = Record<string, EventData>;

// const birthdayDescription =
//   'Looking to celebrate your birthday in style? We can set up your room for the occasion! The perfect complement after a night on court street.';
//
// const birthday: EventData = {
//   eventType: EventType.birthday,
//   mainDescription: birthdayDescription,
//   pictureSlice: [
//     {
//       id: 'a1',
//       url: bday1,
//       description: 'desc of image 1',
//       imageClasses: 'brightness-[1] saturation-[1.05]',
//       priority: true,
//     },
//     {
//       id: 'a3',
//       url: bday3,
//       description: 'desc of image 2',
//       imageClasses: 'brightness-[1] saturation-[1.14]',
//       priority: false,
//     },
//     {
//       id: 'a2',
//       url: bday2,
//       description: 'desc of image 2',
//       imageClasses: 'brightness-[1] saturation-[1.12]',
//       priority: false,
//     },
//   ],
// };

const weddingsAndAnniversariesDescription =
  "Congratulations on such an amazing milestone together! We're so excited to help make your special day special. Give us a call and we'll decorate your room to set the vibe";

const weddingsAndAnniversaries: EventData = {
  eventType: EventType.weddings_and_anniversaries,
  mainDescription: weddingsAndAnniversariesDescription,
  pictureSlice: [
    {
      id: 'b2',
      url: married1,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.28] saturation-[1.18]',
      priority: true,
    },
    {
      id: 'b1',
      url: married2,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.28] saturation-[1.18]',
      priority: false,
    },
    {
      id: 'b3',
      url: married3,
      description: 'desc of image 3',
      imageClasses: 'brightness-[1.28] saturation-[1.18]',
      priority: false,
    },
    {
      id: 'b4',
      url: engaged1,
      description: 'desc of image 3',
      imageClasses: 'brightness-[1.28] saturation-[1.18]',
      priority: false,
    },
    {
      id: 'b5',
      url: engaged2,
      description: 'desc of image 3',
      imageClasses: 'brightness-[1.28] saturation-[1.18]',
      priority: false,
    },
    {
      id: 'b6',
      url: engaged3,
      description: 'desc of image 3',
      imageClasses: 'brightness-[1.28] saturation-[1.18]',
      priority: false,
    },
  ],
};

// const graduationDescription =
//   "Well done on graduation! You finally made it 🎊! Book a stay in one of our events, and we'll design it in a way that helps you celebrate your amazing academic achievement";

// const graduations: EventData = {
//   eventType: EventType.graduations,
//   mainDescription: graduationDescription,
//   pictureSlice: [
//     {
//       id: 'c2',
//       url: grad2,
//       description: 'desc of Image 2',
//       imageClasses: 'brightness-[1.12] saturation-[1.06]',
//       priority: true,
//     },
//     {
//       id: 'c1',
//       url: grad1,
//       description: 'desc of Image 1',
//       imageClasses: 'brightness-[1.24] saturation-[1.14]',
//       priority: false,
//     },
//     {
//       id: 'c3',
//       url: bday3,
//       description: 'desc of Image 3',
//       imageClasses: 'brightness-[1.12] saturation-[1.06]',
//       priority: false,
//     },
//   ],
// };

const eventDataSlice: EventDataRecord = {
  // 1: birthday,
  2: weddingsAndAnniversaries,
  // 3: graduations,
};

export default eventDataSlice;
