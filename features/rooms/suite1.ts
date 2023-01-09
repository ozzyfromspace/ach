import suite1_1 from '../../public/hotel_images/suite1/1.jpg';
import suite1_2 from '../../public/hotel_images/suite1/2.jpg';
import suite1_3 from '../../public/hotel_images/suite1/3.jpg';
import suite1_4 from '../../public/hotel_images/suite1/4.jpg';
import suite1_5 from '../../public/hotel_images/suite1/5.jpg';
import suite1_6 from '../../public/hotel_images/suite1/6.jpg';
import { RoomData, RoomType } from './types';

const suite1Desc = '1-bedroom suite with a comfy living space';

export const suite1_data: RoomData = {
  roomType: RoomType.suite1,
  roomName: 'Athena Suite',
  mainDescription: suite1Desc,
  amenities: [],
  pictureSlice: [
    {
      id: '0',
      url: suite1_1,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.16] saturation-[1.05]',
      priority: true,
    },
    {
      id: '1',
      url: suite1_2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.35] saturation-[1.12]',
      priority: false,
    },
    {
      id: '2',
      url: suite1_3,
      description: 'desc of image 3',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: false,
    },
    {
      id: '3',
      url: suite1_4,
      description: 'desc of image 4',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: false,
    },
    {
      id: '4',
      url: suite1_5,
      description: 'desc of image 5',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: false,
    },
    {
      id: '5',
      url: suite1_6,
      description: 'desc of image 6',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
      priority: false,
    },
  ],
};
