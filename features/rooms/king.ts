import king_1 from '../../public/hotel_images/king/king-1.jpg';
import king_2 from '../../public/hotel_images/king/king-2.jpg';
import king_3 from '../../public/hotel_images/king/king-3.jpg';
import king_4 from '../../public/hotel_images/king/king-4.jpg';
import { MainDescription, RoomData, RoomType } from './types';

const capacity = 'Sleeps 2 adults plus 1 child';
const truncatedDescription =
  'With 65-inch 4K Smart TV, Free High-speed internet, 1 block to uptown Court Street';

const mainDescriptionArray: MainDescription[] = [
  {
    id: '1',
    value:
      'Treat yourself to this luxurious and stylish room with a 65-inch 4K smart TV.  King-sized bed with floor-to-ceiling windows and heated hard floors.',
  },
  {
    id: '2',
    value:
      'The ensuite super modern bath features a waterfall shower with enclosed barn style glass doors and the comfort of plush towels. Additional amenities include high-speed internet, a microwave, a mini fridge with complimentary beverages and coffeemaker for freshly brewed coffee or tea.',
  },
  {
    id: '3',
    value:
      'Every single king is unique. We hope you enjoy your one-of-a-kind room.',
  },
];

export const king_data: RoomData = {
  roomType: RoomType.king,
  roomName: 'Luxurious King',
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
