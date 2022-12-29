import { Amenity } from './AmenityIcon';

import athena1 from '../../public/rooms/athena-1.jpeg';
import athena2 from '../../public/rooms/athena-2.jpeg';
import athena3 from '../../public/rooms/athena-3.jpeg';
import cleo1 from '../../public/rooms/cleo-1.jpeg';
import cleo2 from '../../public/rooms/cleo-2.jpeg';
import cleo3 from '../../public/rooms/cleo-3.jpeg';
import zeus1 from '../../public/rooms/zeus-1.jpeg';
import { Picture } from '../picDisplay/PicDisplay';

enum RoomType {
  'king' = 'king',
  'queen' = 'queen',
  'bedroom_suite_1' = '1-bedroom-suite',
  'bedroom_suite_2' = '2-bedroom-suite',
}

export interface RoomData {
  roomType: RoomType;
  roomName: string;
  mainDescription: string;
  pictureSlice: Picture[];
  amenities: Amenity[];
}

const athenaDescription = '2-bedroom suite with a comfy living space';

const athenaSuite: RoomData = {
  roomType: RoomType.bedroom_suite_2,
  roomName: 'Athena Suite',
  mainDescription: athenaDescription,
  amenities: [Amenity.Wifi, Amenity.LivingRoom, Amenity.Shower],
  pictureSlice: [
    {
      id: '0',
      url: athena1,
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.16] saturation-[1.05]',
    },
    {
      id: '1',
      url: athena2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.35] saturation-[1.12]',
    },
    {
      id: '2',
      url: athena3,
      description: 'desc of image 2',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
    },
  ],
};

const zeusDescription = 'Enjoy our welcoming Zeus king room, sleeps 2';

const zeusSuite: RoomData = {
  roomType: RoomType.king,
  roomName: 'Zeus King',
  mainDescription: zeusDescription,
  amenities: [Amenity.Wifi, Amenity.Shower],
  pictureSlice: [
    {
      id: '0',
      url: zeus1,
      description: 'desc of image 3',
      imageClasses: 'brightness-[1.28] saturation-[1.18]',
    },
    {
      id: '1',
      url: athena1,
      description: 'desc of Queen 2',
      imageClasses: 'brightness-[1.12] saturation-[1.06]',
    },
    {
      id: '2',
      url: athena2,
      description: 'desc of Queen 2',
      imageClasses: 'brightness-[1.06] saturation-[1.1]',
    },
    {
      id: '3',
      url: cleo1,
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.35] saturation-[1.12]',
    },
    {
      id: '4',
      url: cleo2,
      description: 'desc of image 2',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
    },
  ],
};

const cleoDescription = 'Each room comes with 2 queen beds, sleeps 4';

const cleoQueen: RoomData = {
  roomType: RoomType.queen,
  roomName: 'Cleo Queen',
  mainDescription: cleoDescription,
  amenities: [Amenity.Wifi, Amenity.Shower],
  pictureSlice: [
    {
      id: '0',
      url: cleo1,
      description: 'desc of Queen 1',
      imageClasses: 'brightness-[1.24] saturation-[1.14]',
    },
    {
      id: '1',
      url: cleo2,
      description: 'desc of Queen 2',
      imageClasses: 'brightness-[1.12] saturation-[1.06]',
    },
    {
      id: '2',
      url: cleo3,
      description: 'desc of Queen 2',
      imageClasses: 'brightness-[1.06] saturation-[1.1]',
    },
  ],
};

const roomDataSlice: RoomData[] = [zeusSuite, cleoQueen, athenaSuite];

export default roomDataSlice;
