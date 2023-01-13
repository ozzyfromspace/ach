import queen_1 from '../../public/hotel_images/queen/queen-1.jpg';
import queen_2 from '../../public/hotel_images/queen/queen-2.jpg';
import queen_3 from '../../public/hotel_images/queen/queen-3.jpg';
import queen_4 from '../../public/hotel_images/queen/queen-4.jpg';
import { RoomData, RoomType } from './types';

const queenDesc = 'Two queens, sleeps 4';

export const queen_data: RoomData = {
  roomType: RoomType.queen,
  roomName: 'Artemis Queen',
  mainDescription: queenDesc,
  amenities: [],
  pictureSlice: [
    {
      id: '0',
      url: queen_1,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.10] saturation-[1.14] contrast-[0.9] rotate-[1.35deg] scale-[1.05]',
      priority: false,
    },
    {
      id: '1',
      url: queen_2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.02] saturation-[1.08]',
      priority: true,
    },
    {
      id: '2',
      url: queen_3,
      description: 'desc of image 3',
      imageClasses: 'brightness-[1.2] saturation-[1.11] contrast-[0.95]',
      priority: false,
    },
    {
      id: '3',
      url: queen_4,
      description: 'desc of image 4',
      imageClasses: 'brightness-[1.18] saturation-[1.09] contrast-[0.9]',
      priority: false,
    },
  ],
};
