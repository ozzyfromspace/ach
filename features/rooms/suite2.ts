import suite2_1 from '../../public/hotel_images/suite2/1.jpg';
import suite2_2 from '../../public/hotel_images/suite2/2.jpg';
import suite2_3 from '../../public/hotel_images/suite2/3.jpg';
import suite2_4 from '../../public/hotel_images/suite2/4.jpg';
import suite2_5 from '../../public/hotel_images/suite2/5.jpg';
import suite2_6 from '../../public/hotel_images/suite2/6.jpg';
import { RoomData, RoomType } from './types';

const suite2Desc = '2-bedroom suite with a comfy living space';

export const suite2_data: RoomData = {
  roomType: RoomType.suite2,
  roomName: 'Athena Suite',
  mainDescription: suite2Desc,
  amenities: [],
  pictureSlice: [
    {
      id: '0',
      url: suite2_1,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.16] saturation-[1.05]',
      priority: true,
    },
    {
      id: '1',
      url: suite2_2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.35] saturation-[1.12]',
      priority: false,
    },
    {
      id: '2',
      url: suite2_3,
      description: 'desc of image 3',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: false,
    },
    {
      id: '3',
      url: suite2_4,
      description: 'desc of image 4',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: false,
    },
    {
      id: '4',
      url: suite2_5,
      description: 'desc of image 5',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: false,
    },
    {
      id: '5',
      url: suite2_6,
      description: 'desc of image 6',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: false,
    },
  ],
};
