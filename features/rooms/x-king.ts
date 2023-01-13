import xKing_1 from '../../public/hotel_images/xKing/x-king-1.jpg';
import xKing_2 from '../../public/hotel_images/xKing/x-king-2.jpg';
import xKing_3 from '../../public/hotel_images/xKing/x-king-4.jpg';
import { RoomData, RoomType } from './types';

const xKingDesc = 'Our spacious Hermes King. Sleeps 2';

export const xKing_data: RoomData = {
  roomType: RoomType.xKing,
  roomName: 'Hermes King',
  mainDescription: xKingDesc,
  amenities: [],
  pictureSlice: [
    {
      id: '2',
      url: xKing_3,
      description: 'desc of image 3',
      imageClasses: 'brightness-[1.4] saturation-[0.89] contrast-[0.96]',
      priority: true,
    },
    {
      id: '0',
      url: xKing_1,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.28] saturation-[1.02] contrast-[0.85]',
      priority: true,
    },
    {
      id: '1',
      url: xKing_2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.19] saturation-[1.13] contrast-[0.92]',
      priority: true,
    },
    
  ],
};