import handicap_1 from '../../public/hotel_images/handicap/handicap-1.jpg';
import handicap_2 from '../../public/hotel_images/handicap/handicap-2.jpg';
import handicap_3 from '../../public/hotel_images/handicap/handicap-3.jpg';
import handicap_4 from '../../public/hotel_images/handicap/handicap-4.jpg';
import { RoomData, RoomType } from './types';

const handicapDesc = 'Our handicap-accessible King. Sleeps 2';

export const handicap_data: RoomData = {
  roomType: RoomType.handicap,
  roomName: 'Eros King',
  mainDescription: handicapDesc,
  amenities: [],
  pictureSlice: [
    {
      id: '1',
      url: handicap_2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.24] saturation-[1.2] contrast-[0.96]',
      priority: true,
    },
    {
      id: '2',
      url: handicap_3,
      description: 'desc of image 3',
      imageClasses: 'brightness-[1.12] saturation-[1.08] contrast-[0.95]',
      priority: true,
    },
    {
      id: '3',
      url: handicap_4,
      description: 'desc of image 4',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: true,
    },
    {
      id: '0',
      url: handicap_1,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.08] saturation-[1.05]',
      priority: true,
    },
  ],
};
