import handicap_1 from '../../public/hotel_images/handicap/1.jpg';
import handicap_2 from '../../public/hotel_images/handicap/2.jpg';
import handicap_3 from '../../public/hotel_images/handicap/3.jpg';
import handicap_4 from '../../public/hotel_images/handicap/4.jpg';
import { RoomData, RoomType } from './types';

const handicapDesc = '2-bedroom suite with a comfy living space';

export const handicap_data: RoomData = {
  roomType: RoomType.handicap,
  roomName: 'Athena Suite',
  mainDescription: handicapDesc,
  amenities: [],
  pictureSlice: [
    {
      id: '0',
      url: handicap_1,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.16] saturation-[1.05]',
      priority: true,
    },
    {
      id: '1',
      url: handicap_2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.35] saturation-[1.12]',
      priority: false,
    },
    {
      id: '2',
      url: handicap_3,
      description: 'desc of image 3',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: false,
    },
    {
      id: '3',
      url: handicap_4,
      description: 'desc of image 4',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: false,
    },
  ],
};
