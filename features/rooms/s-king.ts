import sKing_1 from '../../public/hotel_images/sKing/s-king-1.jpg';
import sKing_2 from '../../public/hotel_images/sKing/s-king-2.jpg';
import sKing_3 from '../../public/hotel_images/sKing/s-king-3.jpg';
import sKing_4 from '../../public/hotel_images/sKing/s-king-4.jpg';
import { RoomData, RoomType } from './types';

const sKingDesc = 'Our super king. Sleeps 2';

export const sKing_data: RoomData = {
  roomType: RoomType.sKing,
  roomName: 'Thor King',
  mainDescription: sKingDesc,
  amenities: [],
  pictureSlice: [
    {
      id: '3',
      url: sKing_4,
      description: 'desc of image 4',
      imageClasses: 'brightness-[1.12] saturation-[1.03] contrast-[0.88]',
      priority: true,
    },
    {
      id: '2',
      url: sKing_3,
      description: 'desc of image 3',
      imageClasses: 'brightness-[1.2] saturation-[1.14] -translate-y-[2.8%] scale-[1.056]',
      priority: true,
    },
    {
      id: '1',
      url: sKing_2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.18] saturation-[1.08] contrast-[0.96]',
      priority: true,
    },
    {
      id: '0',
      url: sKing_1,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.2] saturation-[1.05] contrast-[1.02]',
      priority: true,
    },
  ],
};
