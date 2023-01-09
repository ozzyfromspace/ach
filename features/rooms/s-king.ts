import sKing_1 from '../../public/hotel_images/sKing/1.jpg';
import sKing_2 from '../../public/hotel_images/sKing/2.jpg';
import sKing_3 from '../../public/hotel_images/sKing/3.jpg';
import sKing_4 from '../../public/hotel_images/sKing/4.jpg';
import { RoomData, RoomType } from './types';

const sKingDesc = '2-bedroom suite with a comfy living space';

export const sKing_data: RoomData = {
  roomType: RoomType.sKing,
  roomName: 'Athena Suite',
  mainDescription: sKingDesc,
  amenities: [],
  pictureSlice: [
    {
      id: '0',
      url: sKing_1,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.16] saturation-[1.05]',
      priority: true,
    },
    {
      id: '1',
      url: sKing_2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.35] saturation-[1.12]',
      priority: false,
    },
    {
      id: '2',
      url: sKing_3,
      description: 'desc of image 3',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: false,
    },
    {
      id: '3',
      url: sKing_4,
      description: 'desc of image 4',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: false,
    },
  ],
};
