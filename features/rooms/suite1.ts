import suite1_1 from '../../public/hotel_images/suite1/suite1-1.jpg';
import suite1_2 from '../../public/hotel_images/suite1/suite1-2.jpg';
import suite1_3 from '../../public/hotel_images/suite1/suite1-3.jpg';
import suite1_4 from '../../public/hotel_images/suite1/suite1-4.jpg';
import suite1_5 from '../../public/hotel_images/suite1/suite1-5.jpg';
import suite1_6 from '../../public/hotel_images/suite1/suite1-6.jpg';
import { MainDescription, RoomData, RoomType } from './types';

const mainDescriptionArray: MainDescription[] = [
  {
    id: '1',
    value:
      'Enjoy our luxurious suite with one bedroom featuring a king-sized bed and a living room with a queen-sized sleeper sofa.',
  },
  {
    id: '2',
    value:
      'This suite offers two 65-inch 4K smart TV’s, floor-to-ceiling windows and heated hard floors.  Get caught up on work using the desk with high-speed internet. The ensuite super modern bath features a waterfall shower with enclosed barn style glass doors with plush towels.  Additional amenities include a microwave, a mini fridge with complimentary beverages and coffeemaker for freshly brewed coffee or tea.',
  },
];

const truncatedDescription =
  "With Two 65-inch 4K Smart TV's, Free High-speed internet, 1 block to uptown Court Street";
const capacity = 'Sleeps 4 adults plus 2 children';

export const suite1_data: RoomData = {
  roomType: RoomType.suite1,
  roomName: '1 Bedroom Modern Suite with a Living Room',
  capacity,
  truncatedDescription,
  mainDescriptionArray,
  amenities: [],
  pictureSlice: [
    {
      id: '0',
      url: suite1_5,
      description:
        'upgraded stainless-steel waterfall and body shower behind an oval-shaped glass barn-style door. towels on a rack outside the shower area. well lit with light-peach colored subway tiles',
      imageClasses: 'brightness-[1.23] saturation-[1.08] contrast-[0.96]',
      priority: true,
    },
    {
      id: '1',
      url: suite1_2,
      description:
        'view of one bedroom suite from the perspective of the large picture windows. 1 of 2 comfy rotating chairs are seen close up. in the distance, large flat-screen tv is mounted on the wall, with light-brown dresser beneath it. air-conditioning unit is placed above door that leads to living space. door next to rounded mirror leads to bathroom. door near tv leads to gym. office chair behind decorative, white pillar. warm lighting tone, multiple light sources',
      imageClasses: 'brightness-[1.07] saturation-[0.98] contrast-[0.97]',
      priority: true,
    },
    {
      id: '2',
      url: suite1_3,
      description:
        'large living space with full-body mirror hanging on the wall. Bed with light-brown wooden frame. wood floors, aluminum lamps, very well lit',
      imageClasses: 'brightness-[1.08] saturation-[1.08]',
      priority: true,
    },
    {
      id: '5',
      url: suite1_1,
      description:
        'large king bed with two comfy, rotating chairs overlooking the street level. massive picture windows taking the entire wall-space. painting of a woman in a gray forest holding a bright-red unbrella as she stares at the Eiffel tower in the distance is mounted above glass office take. well lit room',
      imageClasses: 'brightness-[1.08] saturation-[1.08]',
      priority: true,
    },
    {
      id: '3',
      url: suite1_4,
      description:
        'living space of the zeus 1-king suite. blue sofa with 1 of 2 lamps shown in a corner. composite artwork of flowers and rocks above the sofa. ottoman in front of the sofa, staring at a flat screen tv mounted on the wall off-screen. through the doors, another flat-screen tv is seen with a light-brown dresser under it (in the bedroom)',
      imageClasses: 'brightness-[1] saturation-[0.97]',
      priority: true,
    },
    {
      id: '4',
      url: suite1_6,
      description:
        'view of the city outside the 1-king Zeus suite. overcast day with sun breaking through the clouds, quiet street, appalachian mountains in the distance',
      imageClasses: 'brightness-[1.19] saturation-[1.13] contrast-[0.94]',
      priority: true,
    },
  ],
};
