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
      'Our Zeus suite features 1 bedroom and a detached living space with a soft couch.',
  },
  {
    id: '2',
    value:
      'The bedroom includes a microwave oven, a fridge stocked with complimentary beverages, a 4k tv with cable, HBO, and Cinemax, and heated wood floors.',
  },
  {
    id: '3',
    value:
      'While in your comfy king bed, you can enjoy scenic views of downtown, court street, and the Appalachian mountains in the distance through your full-picture windows. Our bathrooms have European-style waterfall showers, body jets, a hand-held shower, and a beautiful oval-shaped glass barn-style door. Our living space has a soft pullout couch, a second 4k tv.',
  },
  {
    id: '4',
    value: 'We hope our cozy interior design elements help you feel at home.',
  },
];

const truncatedDescription =
  'Our Zeus suite features a 1-king bedroom and a detached living space.';
const capacity = '1 king + living room. Sleeps 3';

export const suite1_data: RoomData = {
  roomType: RoomType.suite1,
  roomName: 'Zeus Suite',
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
