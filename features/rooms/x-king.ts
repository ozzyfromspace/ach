import xKing_1 from '../../public/hotel_images/xKing/x-king-1.jpg';
import xKing_2 from '../../public/hotel_images/xKing/x-king-2.jpg';
import xKing_3 from '../../public/hotel_images/xKing/x-king-4.jpg';
import { MainDescription, RoomData, RoomType } from './types';

const mainDescriptionArray: MainDescription[] = [
  {
    id: '1',
    value:
      'Every deluxe King room has plenty of space, featuring heated wood floors, full-picture windows, a comfortable king bed, upgraded Euro-style waterfall showers, and unique views of the campus and the Appalachians in the distance.',
  },
  {
    id: '2',
    value:
      'We modeled these rooms after our signature 1-bedroom suites. We hope you have an excellent stay.',
  },
];

const truncatedDescription =
  'Our deluxe Hermes King rooms are modern, comfortable, and roomy';
const capacity = '1 King. Sleeps 2';

export const xKing_data: RoomData = {
  roomType: RoomType.xKing,
  roomName: 'King (Deluxe)',
  capacity,
  truncatedDescription,
  mainDescriptionArray,
  amenities: [],
  pictureSlice: [
    {
      id: '2',
      url: xKing_3,
      description:
        'one king bed with two comfy chairs, set in front of a large picture window overlooking the street level',
      imageClasses: 'brightness-[1.4] saturation-[0.89] contrast-[0.96]',
      priority: true,
    },
    {
      id: '0',
      url: xKing_1,
      description:
        'one king bed with two comfy chairs, set in front of a large picture window overlooking the street level',
      imageClasses: 'brightness-[1.28] saturation-[1.02] contrast-[0.85]',
      priority: true,
    },
    {
      id: '1',
      url: xKing_2,
      description:
        'artistic shot of upgraded, stainless steel waterfall and body shower, with oval barn-style door',
      imageClasses: 'brightness-[1.19] saturation-[1.13] contrast-[0.92]',
      priority: true,
    },
  ],
};
