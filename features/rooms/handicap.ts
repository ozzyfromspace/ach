import handicap_1 from '../../public/hotel_images/handicap/handicap-1.jpg';
import handicap_2 from '../../public/hotel_images/handicap/handicap-2.jpg';
import handicap_3 from '../../public/hotel_images/handicap/handicap-3.jpg';
import handicap_4 from '../../public/hotel_images/handicap/handicap-4.jpg';
import handicap_5 from '../../public/hotel_images/handicap/handicap-5.jpg';
import { MainDescription, RoomData, RoomType } from './types';

const mainDescriptionArray: MainDescription[] = [
  {
    id: '1',
    value:
      'The most luxurious handicap accessible room in Athens with a king-sized bed.',
  },
  {
    id: '2',
    value:
      'Settle into the relaxing, powerlift recliner and enjoy the beautiful floor-to-ceiling picture windows, heated hard floors and the 65-inch 4K smart TV.  The ensuite super modern bathroom features a waterfall shower with body jets and a handheld shower head with a shower chair, wheelchair ramp and rails for support.  Additional amenities include high speed internet, a microwave, a mini fridge with complimentary beverages and coffeemaker for freshly brewed coffee or tea.',
  },
];

const truncatedDescription =
  'With 65-inch 4K Smart TV, Free High-speed internet, 1 block to uptown Court Street';
const capacity = 'Sleeps 2 adults plus 1 child';

export const handicap_data: RoomData = {
  roomType: RoomType.handicap,
  roomName: 'Premium Luxury King - Handicap Accessible',
  capacity,
  truncatedDescription,
  mainDescriptionArray,
  amenities: [],
  pictureSlice: [
    {
      id: '1',
      url: handicap_2,
      description:
        'handicap bathroom with upgraded rainfall, waterfall, and body shower system. accessibility railing on the wall, and white chair in the corner. Bathroom is wheel-chair accessible',
      imageClasses: 'brightness-[1.24] saturation-[1.2] contrast-[0.96]',
      priority: true,
    },
    {
      id: '2',
      url: handicap_3,
      description:
        'large handicap-accessible room boasting a lot of floor space, with large king bed in the center, and comfortable reclining chair next to two windows that illuminate the room well',
      imageClasses: 'brightness-[1.12] saturation-[1.08] contrast-[0.95]',
      priority: true,
    },
    {
      id: '3',
      url: handicap_4,
      description:
        'view of the eros handicap king room from perspective of guest lying in bed. tv is mounted on wall, beneath tv is a light-colored wood dresser. to the left is a glass office desk, blue chair, and a painting of two horses. on the left is a blue spartan chair with abstract artwork above it, and a small rounded glass table next to it. room is very well lit',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: true,
    },
    {
      id: '4',
      url: handicap_5,
      description:
        'view of the eros handicap king room from perspective of guest lying in bed. tv is mounted on wall, beneath tv is a light-colored wood dresser. to the left is a glass office desk, blue chair, and a painting of two horses. on the left is a blue spartan chair with abstract artwork above it, and a small rounded glass table next to it. room is very well lit',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: true,
    },
    {
      id: '0',
      url: handicap_1,
      description:
        'handicap bathroom with upgraded rainfall, waterfall, and body shower system. accessibility railing on the wall. wheel chair accessible, with soap/shampoo containers fixed to the wall',
      imageClasses: 'brightness-[1.08] saturation-[1.05]',
      priority: true,
    },
  ],
};
