import { Amenity } from './AmenityIcon';

enum RoomType {
  'king' = 'king',
  'queen' = 'queen',
  'bedroom_suite_1' = '1-bedroom-suite',
  'bedroom_suite_2' = '2-bedroom-suite',
}

interface Picture {
  url: string;
  description: string;
  imageClasses: string;
}

export interface RoomData {
  roomType: RoomType;
  roomName: string;
  mainDescription: string;
  pictureSlice: Picture[];
  amenities: Amenity[];
}

const athenaDescription = "There's only one Athena 2-bedroom Suite";

const athenaSuite: RoomData = {
  roomType: RoomType.bedroom_suite_2,
  roomName: 'Athena Suite',
  mainDescription: athenaDescription,
  amenities: [Amenity.Wifi, Amenity.LivingRoom, Amenity.Shower],
  pictureSlice: [
    {
      url: '/rooms/athena-1.jpeg',
      description: 'desc of image 1',
      imageClasses: 'brightness-[1.16] saturation-[1.05]',
    },
    {
      url: '/rooms/athena-2.jpeg',
      description: 'desc of image 2',
      imageClasses: 'brightness-[1.35] saturation-[1.12]',
    },
    {
      url: '/rooms/athena-3.jpeg',
      description: 'desc of image 2',
      imageClasses: 'brightness-[0.88] saturation-[1.14]',
    },
  ],
};

const zeusDescription = 'Our Zeus King rooms are a Greek paradise.';

const zeusSuite: RoomData = {
  roomType: RoomType.king,
  roomName: 'Zeus King',
  mainDescription: zeusDescription,
  amenities: [Amenity.Wifi, Amenity.Shower],
  pictureSlice: [
    {
      url: '/rooms/zeus-1.jpeg',
      description: 'desc of image 3',
      imageClasses: 'brightness-[1.28] saturation-[1.18]',
    },
  ],
};

const cleoDescription = 'Rest easy in our Cleo double-queens.';

const cleoQueen: RoomData = {
  roomType: RoomType.queen,
  roomName: 'Cleo Queen',
  mainDescription: cleoDescription,
  amenities: [Amenity.Wifi, Amenity.Shower],
  pictureSlice: [
    {
      url: '/rooms/cleo-1.jpeg',
      description: 'desc of Queen 1',
      imageClasses: 'brightness-[1.24] saturation-[1.14]',
    },
    {
      url: '/rooms/cleo-2.jpeg',
      description: 'desc of Queen 2',
      imageClasses: 'brightness-[1.12] saturation-[1.06]',
    },
    {
      url: '/rooms/cleo-3.jpeg',
      description: 'desc of Queen 2',
      imageClasses: 'brightness-[1.06] saturation-[1.1]',
    },
  ],
};

const roomDataSlice: RoomData[] = [zeusSuite, cleoQueen, athenaSuite];

export default roomDataSlice;
