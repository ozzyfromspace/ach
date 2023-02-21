import sKing_1 from '../../public/hotel_images/sKing/s-king-1.jpg';
import sKing_2 from '../../public/hotel_images/sKing/s-king-2.jpg';
import sKing_3 from '../../public/hotel_images/sKing/s-king-3.jpg';
import sKing_4 from '../../public/hotel_images/sKing/s-king-4.jpg';
import { MainDescription, RoomData, RoomType } from './types';

const truncatedDescription =
  'With 65-inch 4K Smart TV, Free High-speed internet, 1 block to uptown Court Street';
const capacity = 'Sleeps 2 adults plus 1 child';

const mainDescriptionArray: MainDescription[] = [
  {
    id: '1',
    value:
      'Luxurious, premium room with a king-sized bed, beautiful floor-to-ceiling windows and heated hard floors.',
  },
  {
    id: '2',
    value:
      'Work comfortably at the desk with high-speed internet, then relax and enjoy watching your favorite show on the 65-inch 4K smart TV.  The ensuite super modern bath features a waterfall shower with enclosed barn style glass doors the comfort of plush towels.  Additional amenities include a microwave, a mini fridge with complimentary beverages and coffeemaker for freshly brewed coffee or tea.',
  },
];

export const sKing_data: RoomData = {
  roomType: RoomType.sKing,
  roomName: 'Premium, Modern King Room',
  capacity,
  truncatedDescription,
  mainDescriptionArray,
  amenities: [],
  pictureSlice: [
    {
      id: '3',
      url: sKing_4,
      description:
        'full bathroom with upgraded waterfall and body shower on the left. dark wood vanity with large mirror and long light above it on the left. room shows hair dryer, towels, and stainless-steel sink',
      imageClasses: 'brightness-[1.12] saturation-[1.03] contrast-[0.88]',
      priority: true,
    },
    {
      id: '2',
      url: sKing_3,
      description:
        'single king room with artwork, two glass-body lamps, and a lot of floor space. one of two windows are seen in the corner, large picture window is off-screen',
      imageClasses:
        'brightness-[1.2] saturation-[1.14] -translate-y-[2.8%] scale-[1.056]',
      priority: true,
    },
    {
      id: '1',
      url: sKing_2,
      description:
        'entry-view of room, showing bed, door leading to the bathroom, fridge, microwave, office desk, tv, and comfortable recliner. artwork is seen in the distance. view is illuminated by large picture window, off-screen',
      imageClasses: 'brightness-[1.18] saturation-[1.08] contrast-[0.96]',
      priority: true,
    },
    {
      id: '0',
      url: sKing_1,
      description:
        'view of room as seen through reflection of large picture window',
      imageClasses: 'brightness-[1.2] saturation-[1.05] contrast-[1.02]',
      priority: true,
    },
  ],
};
