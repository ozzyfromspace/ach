import suite2_1 from '../../public/hotel_images/suite2/suite2-1.jpg';
import suite2_2 from '../../public/hotel_images/suite2/suite2-2.jpg';
import suite2_3 from '../../public/hotel_images/suite2/suite2-3.webp';
import suite2_4 from '../../public/hotel_images/suite2/suite2-4.jpg';
import suite2_5 from '../../public/hotel_images/suite2/suite2-5.jpg';
import suite2_6 from '../../public/hotel_images/suite2/suite2-6.jpg';
import { MainDescription, RoomData, RoomType } from './types';

const truncatedDescription = 'TRUNCATED';

const mainDescriptionArray: MainDescription[] = [
  {
    id: '1',
    value:
      'Our Athena suite includes 2 bedrooms, 1 bathroom, and a detached living space.',
  },
  {
    id: '2',
    value:
      'One of the bedrooms contains a king bed and the other a queen.  Each room is fitted with a microwave oven, a fridge stocked with complimentary beverages, a 4k tv with cable, HBO, and Cinemax, and heated wood floors, among other amenities. Each room has full-picture windows to enjoy picturesque views of the city and the Appalachian mountains in the distance.',
  },
  {
    id: '3',
    value:
      'The bathroom has European-style waterfall showers, body jets, a hand-held shower, and a beautiful oval-shaped glass barn-style door. The custom floating vanity in the spacious bathroom has two sinks and bright overhead make-up lights. Our living space features a comfy gray couch surrounded by two blue chairs, a third 4k tv, and cozy interior design elements.',
  },
  {
    id: '4',
    value:
      'The Athena suite is our pride and joy, and we hope you enjoy your stay.',
  },
];

const capacity = '1 king, 1 queen + living room. Sleeps 4';

export const suite2_data: RoomData = {
  roomType: RoomType.suite2,
  roomName: 'Athena Suite',
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
