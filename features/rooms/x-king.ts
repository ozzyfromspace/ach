import xKing_1 from '../../public/hotel_images/xKing/x-king-1.jpg';
import xKing_2 from '../../public/hotel_images/xKing/x-king-2.jpg';
import xKing_3 from '../../public/hotel_images/xKing/x-king-4.jpg';
import { RoomData, RoomType } from './types';

const xKingDesc = '2-bedroom suite with a comfy living space';

export const xKing_data: RoomData = {
  roomType: RoomType.xKing,
  roomName: 'Athena Suite',
  mainDescription: xKingDesc,
  amenities: [],
  pictureSlice: [
    {
      id: '0',
      url: xKing_1,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.16] saturation-[1.05]',
      priority: true,
    },
    {
      id: '1',
      url: xKing_2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.35] saturation-[1.12]',
      priority: false,
    },
    {
      id: '2',
      url: xKing_3,
      description: 'desc of image 3',
      imageClasses: 'brightness-[1.25] saturation-[1.12]',
      priority: false,
    },
  ],
};
