import handicap_1 from '../../public/hotel_images/handicap/handicap-1.jpg';
import handicap_2 from '../../public/hotel_images/handicap/handicap-2.jpg';
import handicap_3 from '../../public/hotel_images/handicap/handicap-3.jpg';
import handicap_4 from '../../public/hotel_images/handicap/handicap-4.jpg';
import { MainDescription, RoomData, RoomType } from './types';

const mainDescriptionArray: MainDescription[] = [
  {
    id: '1',
    value: 'Our Atlas King is the finest handicap-accessible room in Athens.',
  },
  {
    id: '2',
    value:
      "It's one of our most spacious rooms, outfitted for anyone to enjoy. It features a relaxing, remote-controlled recliner, heated wood floors, and beautiful full-picture windows looking out onto Court street. The bathroom has a waterfall shower, body jets, and a handheld shower head. The bathroom has a wheelchair ramp and rails for support. As usual, this king room has a microwave oven, a fridge stocked with an assortment of complimentary beverages, a 4K tv with cable, HBO, and Cinemax, and a comfy king bed",
  },
  {
    id: '3',
    value: 'We hope you enjoy your stay in our Atlas King room.',
  },
];

const truncatedDescription = 'TRUNCATED';
const capacity = '1 king. Sleeps 2';

export const handicap_data: RoomData = {
  roomType: RoomType.handicap,
  roomName: 'Atlas King (Handicap)',
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
      id: '0',
      url: handicap_1,
      description:
        'handicap bathroom with upgraded rainfall, waterfall, and body shower system. accessibility railing on the wall. wheel chair accessible, with soap/shampoo containers fixed to the wall',
      imageClasses: 'brightness-[1.08] saturation-[1.05]',
      priority: true,
    },
  ],
};
