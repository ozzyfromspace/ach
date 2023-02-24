import queen_1 from '../../public/hotel_images/queen/queen-1.jpg';
import queen_2 from '../../public/hotel_images/queen/queen-2.jpg';
import queen_3 from '../../public/hotel_images/queen/queen-3.jpg';
import queen_4 from '../../public/hotel_images/queen/queen-4.jpg';
import queen_5 from '../../public/hotel_images/queen/queen-5.jpg';
import queen_6 from '../../public/hotel_images/queen/queen-6.jpg';
import { MainDescription, RoomData, RoomType } from './types';

const mainDescriptionArray: MainDescription[] = [
  {
    id: '1',
    value:
      'This luxurious, modern room with two queen sized beds features a 65-inch 4K smart TV, beautiful floor-to-ceiling windows and heated hard floors.',
  },
  {
    id: '2',
    value:
      'The ensuite super modern bath features a waterfall shower with enclosed barn style glass doors and the comfort of plush towels.  Additional amenities include high-speed internet, a microwave, a mini fridge with complimentary and coffeemaker  for freshly brewed coffee or tea. ',
  },
];

const truncatedDescription =
  'With 65-inch 4K Smart TV, Free High-speed internet, 1 block to uptown Court Street';
const capacity = 'Sleeps 4 adults plus 2 children';

export const queen_data: RoomData = {
  roomType: RoomType.queen,
  roomName: 'Luxurious Double Queen',
  capacity,
  truncatedDescription,
  mainDescriptionArray,
  amenities: [],
  pictureSlice: [
    {
      id: '5',
      url: queen_4,
      description:
        'well lit bathroom with a glass vanity and dark wood frame around mirror. shower and rack full of towels are seen in the reflection',
      imageClasses: 'brightness-[1.18] saturation-[1.09] contrast-[0.9]',
      priority: false,
    },
    {
      id: '0',
      url: queen_1,
      description:
        'head-on view of artemis double queen room, queen bed on either side, lit lamp in middle, flower artwork on wall',
      imageClasses:
        'brightness-[1.15] saturation-[1.2] contrast-[0.94] rotate-[0.4deg] scale-[1.05]',
      priority: false,
    },
    {
      id: '2',
      url: queen_3,
      description:
        'side view of 2 queen room showing full picture window with views of white/red town apartments and mountains in the distance',
      imageClasses: 'brightness-[1.2] saturation-[1.11] contrast-[0.95]',
      priority: false,
    },
    {
      id: '3',
      url: queen_5,
      description:
        'well lit bathroom with a glass vanity and dark wood frame around mirror. shower and rack full of towels are seen in the reflection',
      imageClasses: 'brightness-[0.97] saturation-[1.09] contrast-[0.9]',
      priority: false,
    },
    {
      id: '4',
      url: queen_6,
      description:
        'well lit bathroom with a glass vanity and dark wood frame around mirror. shower and rack full of towels are seen in the reflection',
      imageClasses: 'brightness-[0.94] saturation-[1.09] contrast-[0.8]',
      priority: false,
    },
    {
      id: '1',
      url: queen_2,
      description: 'side view of 2 queen room showing air conditioner',
      imageClasses: 'brightness-[0.97] saturation-[1.06]',
      priority: true,
    },
  ],
};
