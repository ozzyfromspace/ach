import queen_1 from '../../public/hotel_images/queen/queen-1.jpg';
import queen_2 from '../../public/hotel_images/queen/queen-2.jpg';
import queen_3 from '../../public/hotel_images/queen/queen-3.jpg';
import queen_4 from '../../public/hotel_images/queen/queen-4.jpg';
import { RoomData, RoomType } from './types';

const mainDescription =
  'Our Artemis Queen room comes with two comfortable queen beds. This room delivers a heated wood floor, full-picture windows, a microwave oven, and a fridge stocked with complimentary beverages. This room features a fully upgraded European-style bathroom with a waterfall shower, body jets, a hand-held shower, a custom vanity, and barn-style oval glass doors. Comfortably holding up to 4 people (and your dog!), we welcome you, your friends, and your family to enjoy a relaxing stay in one of our uniquely designed Artemis queen rooms.';
const truncatedDescription = 'TRUNCATED';
const capacity = '2 queens. Sleeps 4';

export const queen_data: RoomData = {
  roomType: RoomType.queen,
  roomName: 'Artemis Queen',
  capacity,
  truncatedDescription,
  mainDescription,
  amenities: [],
  pictureSlice: [
    {
      id: '0',
      url: queen_1,
      description:
        'head-on view of artemis double queen room, queen bed on either side, lit lamp in middle, flower artwork on wall',
      imageClasses:
        'brightness-[1.10] saturation-[1.14] contrast-[0.9] rotate-[1.35deg] scale-[1.05]',
      priority: false,
    },
    {
      id: '1',
      url: queen_2,
      description: 'side view of 2 queen room showing air conditioner',
      imageClasses: 'brightness-[1.02] saturation-[1.08]',
      priority: true,
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
      url: queen_4,
      description:
        'well lit bathroom with a glass vanity and dark wood frame around mirror. shower and rack full of towels are seen in the reflection',
      imageClasses: 'brightness-[1.18] saturation-[1.09] contrast-[0.9]',
      priority: false,
    },
  ],
};
