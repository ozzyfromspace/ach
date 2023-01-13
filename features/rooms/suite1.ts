import suite1_1 from '../../public/hotel_images/suite1/suite1-1.jpg';
import suite1_2 from '../../public/hotel_images/suite1/suite1-2.jpg';
import suite1_3 from '../../public/hotel_images/suite1/suite1-3.jpg';
import suite1_4 from '../../public/hotel_images/suite1/suite1-4.jpg';
import suite1_5 from '../../public/hotel_images/suite1/suite1-5.jpg';
import suite1_6 from '../../public/hotel_images/suite1/suite1-6.jpg';
import { RoomData, RoomType } from './types';

const suite1Desc = '1-bedroom suite with a comfy living space';

export const suite1_data: RoomData = {
  roomType: RoomType.suite1,
  roomName: 'Zeus Suite',
  mainDescription: suite1Desc,
  amenities: [],
  pictureSlice: [
    {
      id: '0',
      url: suite1_5,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.23] saturation-[1.08] contrast-[0.96]',
      priority: true,
    },
    {
      id: '2',
      url: suite1_3,
      description: 'desc of image 3',
      imageClasses: 'brightness-[1.08] saturation-[1.08]',
      priority: true,
    },
    {
      id: '1',
      url: suite1_2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.07] saturation-[0.98] contrast-[0.97]',
      priority: true,
    },
    {
      id: '5',
      url: suite1_1,
      description: 'desc of image 6',
      imageClasses: 'brightness-[1.08] saturation-[1.08]',
      priority: true,
    },
    {
      id: '3',
      url: suite1_4,
      description: 'desc of image 4',
      imageClasses: 'brightness-[1] saturation-[0.97]',
      priority: true,
    },
    {
      id: '4',
      url: suite1_6,
      description: 'desc of image 5',
      imageClasses: 'brightness-[1.19] saturation-[1.13] contrast-[0.94]',
      priority: true,
    },
  ],
};
