import king_1 from '../../public/hotel_images/king/king-1.jpg';
import king_2 from '../../public/hotel_images/king/king-2.jpg';
import king_3 from '../../public/hotel_images/king/king-3.jpg';
import king_4 from '../../public/hotel_images/king/king-4.jpg';
import { RoomData, RoomType } from './types';

const kingDesc = 'A lovely single king, sleeps 2';

export const king_data: RoomData = {
  roomType: RoomType.king,
  roomName: 'Apollo King',
  mainDescription: kingDesc,
  amenities: [],
  pictureSlice: [
    {
      id: '3',
      url: king_4,
      description: 'desc of image 4',
      imageClasses: 'brightness-[1.15] saturation-[1.07] contrast-[0.95]',
      priority: false, 
    },
    {
      id: '0',
      url: king_1,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.1] saturation-[1.05] contrast-[0.96]',
      priority: true,
    },
    {
      id: '1',
      url: king_2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.1] saturation-[1.04]',
      priority: false,
    },
    {
      id: '2',
      url: king_3,
      description: 'desc of image 3',
      imageClasses: 'brightness-[1.1] saturation-[1.03]',
      priority: false,
    },
  ],
};
