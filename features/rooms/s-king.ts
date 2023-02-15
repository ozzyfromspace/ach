import sKing_1 from '../../public/hotel_images/sKing/s-king-1.jpg';
import sKing_2 from '../../public/hotel_images/sKing/s-king-2.jpg';
import sKing_3 from '../../public/hotel_images/sKing/s-king-3.jpg';
import sKing_4 from '../../public/hotel_images/sKing/s-king-4.jpg';
import { RoomData, RoomType } from './types';

const mainDescription =
  "Our Premium Eros Kings are the largest single king rooms you can get, and they don't disappoint. Each Premium Eros King features an upgraded waterfall and body shower enclosed in beautiful barn-style glass doors. The heated floors are wooden, covering every inch of the bedroom. Every Eros king comes with a full-picture window and a half-picture window. Each room is secluded to provide more privacy and solitude. And they all come with a microwave oven, a fridge stocked with complimentary beverages, a coffee maker, a 4K TV with cable and HBO, and a comfy king bed to relax in as you enjoy your premium Eros King.";
const truncatedDescription = 'TRUNCATED';
const capacity = '1 king. Sleeps 2';

export const sKing_data: RoomData = {
  roomType: RoomType.sKing,
  roomName: 'Eros King (Premium)',
  capacity,
  truncatedDescription,
  mainDescription,
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
