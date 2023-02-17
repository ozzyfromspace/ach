import king_1 from '../../public/hotel_images/king/king-1.jpg';
import king_2 from '../../public/hotel_images/king/king-2.jpg';
import king_3 from '../../public/hotel_images/king/king-3.jpg';
import king_4 from '../../public/hotel_images/king/king-4.jpg';
import { MainDescription, RoomData, RoomType } from './types';

const capacity = '1 king. Sleeps 2';
const truncatedDescription = 'A luxurious king room, minutes from court street';

const mainDescriptionArray: MainDescription[] = [
  {
    id: '1',
    value:
      'All our rooms are high-end, and our single King rooms are no exception.',
  },
  {
    id: '2',
    value:
      'Every room comes with full-picture windows, upgraded waterfall showers with barn-style glass doors, comfortable beds, a microwave oven, and a fridge with an assortment of complimentary beverages.',
  },
  {
    id: '3',
    value:
      'Every single king is unique. We hope you enjoy your one-of-a-kind room.',
  },
];

export const king_data: RoomData = {
  roomType: RoomType.king,
  roomName: 'King',
  capacity,
  truncatedDescription,
  mainDescriptionArray,
  amenities: [],
  pictureSlice: [
    {
      id: '3',
      url: king_4,
      description: 'upgraded waterfall and body showers with barn-style doors',
      imageClasses: 'brightness-[1.15] saturation-[1.07] contrast-[0.95]',
      priority: false,
    },
    {
      id: '0',
      url: king_1,
      description: 'single king bed',
      imageClasses: 'brightness-[1.1] saturation-[1.05] contrast-[0.96]',
      priority: true,
    },
    {
      id: '1',
      url: king_2,
      description:
        'view of the room from persepective of guest on the bed. tv mounted on wall, light-brown dresser, and office table next to a full picture window',
      imageClasses: 'brightness-[1.1] saturation-[1.04]',
      priority: false,
    },
    {
      id: '2',
      url: king_3,
      description:
        'greek-blue bathroom sink with a backlit oval mirror and a rank full of various towels',
      imageClasses: 'brightness-[1.1] saturation-[1.03]',
      priority: false,
    },
  ],
};
