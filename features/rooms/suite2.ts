import suite2_1 from '../../public/hotel_images/suite2/suite2-1.jpg';
import suite2_2 from '../../public/hotel_images/suite2/suite2-2.jpg';
import suite2_3 from '../../public/hotel_images/suite2/suite2-3.webp';
import suite2_4 from '../../public/hotel_images/suite2/suite2-4.jpg';
import suite2_5 from '../../public/hotel_images/suite2/suite2-5.jpg';
import suite2_6 from '../../public/hotel_images/suite2/suite2-6.jpg';
import { MainDescription, RoomData, RoomType } from './types';

const truncatedDescription =
  "With Three 65-inch 4K Smart TV's, Free High-speed internet, 1 block to uptown Court Street";

const mainDescriptionArray: MainDescription[] = [
  {
    id: '1',
    value:
      'Impressive luxurious 2-bedroom suite that offers three 65-inch 4K smart TV’s, a king-sized bedroom, a queen-sized bedroom, and a large living room with a queen-sized pullout sofa.',
  },
  {
    id: '2',
    value:
      'Get caught up on work using the desk with high-speed internet.  Enjoy the floor-to ceiling windows, heated hard floors and complimentary beverages in the mini-fridge.  The ensuite super modern bathroom includes a double sink with a waterfall shower with enclosed barn style glass doors and the comfort of plush towels.  Additional amenities include a microwave and coffeemaker for freshly brewed coffee or tea.',
  },
];

const capacity = 'Sleeps 6 adults plus 3 children';

export const suite2_data: RoomData = {
  roomType: RoomType.suite2,
  roomName: 'Large Luxurious 2 Bedroom Suite & Living Room',
  capacity,
  truncatedDescription,
  mainDescriptionArray,
  amenities: [],
  pictureSlice: [
    {
      id: '4',
      url: suite2_5,
      description:
        'full bath with upgraded rainfall and body shower, large 2-sink vanity made of composite woods. bright lights illuminate the space. the oval, glass barn-style door can be seen',
      imageClasses: 'brightness-[1.03] saturation-[1.03]',
      priority: true,
    },
    {
      id: '1',
      url: suite2_2,
      description:
        'living space of the Athena suite. one large gray sofa with hex-patterned pillows on either end. A large painging of a small bridge over bright-blue water is mounted above the sofa. two aluminum lamps on either side of the sofa. two blue spartan chairs on either side of the sofa, and a chest-inspired fuzzy gray ottoman with gold legs rests in the middle of the room. The entire wall on the right is one massive window, quietly placed away from the lobby and street, with views of trees and the suburbs. very well lit area',
      imageClasses: 'brightness-[1.08] saturation-[1.05]',
      priority: true,
    },
    {
      id: '2',
      url: suite2_3,
      description:
        'from the sofa (off-screen), guest sees a flat screen tv mounted on the wall aove a glass office table. two doors lead into two bedrooms. the beedroom on the left is a queen room, the bedroom on the right is a king room. a small mirror is mounted on the wall between the two doors. a gray ottoman is in the fore-front of the shot.',
      imageClasses: 'brightness-[1.14] saturation-[0.95] contrast-[0.93]',
      priority: true,
    },
    {
      id: '5',
      url: suite2_6,
      description:
        '1 of 2 rooms of the 2 bedroom Athena suite. a large, comfy bed with bright, aluminum lamps on either side. artwork of a couple in traditional wedding attire dancing as a man plays the violin behind a lake is mounted on the wall. half-wall picture window illuminates the room',
      imageClasses: 'brightness-[0.89] contrast-[1.32] saturation-[1.02]',
      priority: true,
    },
    {
      id: '0',
      url: suite2_1,
      description:
        'living space of the Athena suite. one large gray sofa with hex-patterned pillows on either end. two aluminum lamps on either side of the sofa. two blue spartan chairs on either side of the sofa, and a chest-inspired fuzzy gray ottoman with gold legs rests in the middle of the room. two doors can be seen, each leading to a bedroom. the closed door in the middle of the screen leads to the bathroom. very well lit room',
      imageClasses: 'brightness-[1.04] saturation-[1.05] contrast-[0.96]',
      priority: true,
    },
    {
      id: '3',
      url: suite2_4,
      description:
        'focused shot of the vanity in the Athena suite. two sink vanity with green-frosted top and composite-wood finish and make-up lights above the vanity. Bright room, easily admits natural light from the door behind, and has bright make-up lights above the vanity. hairdryer on wall, towels on rack, toilet in corner',
      imageClasses: 'brightness-[1.03] saturation-[1.03]',
      priority: true,
    },
  ],
};
