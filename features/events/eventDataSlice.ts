enum EventType {
  birthday = 'birthday',
  weddings_and_anniversaries = 'wedding_and_anniversaries',
  graduations = 'graduations',
}

interface Picture {
  id: string;
  url: string;
  description: string;
  imageClasses: string;
}

export interface EventData {
  eventType: EventType;
  mainDescription: string;
  pictureSlice: Picture[];
}

const birthdayDescription =
  'Looking to celebrate your birthday in style? We can set up your room for the occasion! The perfect complement after a night on court street.';

const birthday: EventData = {
  eventType: EventType.birthday,
  mainDescription: birthdayDescription,
  pictureSlice: [
    {
      id: '1',
      url: '/events/birthday-example1.jpeg',
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.16] saturation-[1.05]',
    },
    {
      id: '2',
      url: '/events/birthday-example2.jpeg',
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.35] saturation-[1.12]',
    },
    {
      id: '3',
      url: '/events/birthday-example3.jpeg',
      description: 'desc of image 2',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
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
      id: '1',
      url: '/events/zeus-1.jpeg',
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
      id: '1',
      url: '/events/cleo-1.jpeg',
      description: 'desc of Queen 1',
      imageClasses: 'brightness-[1.24] saturation-[1.14]',
    },
    {
      id: '2',
      url: '/events/cleo-2.jpeg',
      description: 'desc of Queen 2',
      imageClasses: 'brightness-[1.12] saturation-[1.06]',
    },
    {
      id: '3',
      url: '/events/cleo-3.jpeg',
      description: 'desc of Queen 2',
      imageClasses: 'brightness-[1.06] saturation-[1.1]',
    },
  ],
};

const eventDataSlice: EventData[] = [
  birthday,
  weddingsAndAnniversaries,
  graduations,
];

export default eventDataSlice;
