enum RoomType {
  'king' = 'king',
  'queen' = 'queen',
  'bedroom_suite_1' = '1-bedroom-suite',
  'bedroom_suite_2' = '2-bedroom-suite',
}

interface Picture {
  url: string;
  description: string;
}

export interface RoomData {
  roomType: RoomType;
  roomName: string;
  mainDescription: string;
  pictureSlice: Picture[];
}

const athenaDescription =
  'we only have one athena suite, and you deserve it. add a proper description here.';

const athenaSuite: RoomData = {
  roomType: RoomType.bedroom_suite_2,
  roomName: 'Athena Suite',
  mainDescription: athenaDescription,
  pictureSlice: [
    { url: '/one', description: 'desc of image 1' },
    { url: '/two', description: 'desc of image 2' },
  ],
};

const zeusDescription =
  "our zeus king's are all uniquely designed to offer a new experience every tine. add a proper description here.";

const zeusSuite: RoomData = {
  roomType: RoomType.king,
  roomName: 'Zeus King',
  mainDescription: zeusDescription,
  pictureSlice: [
    { url: '/three', description: 'desc of image 3' },
    { url: '/four', description: 'desc of image 4' },
  ],
};

const cleoDescription =
  "our zeus king's are all uniquely designed to offer a new experience every tine. add a proper description here.";

const cleoQueen: RoomData = {
  roomType: RoomType.queen,
  roomName: 'Cleo Queen',
  mainDescription: cleoDescription,
  pictureSlice: [
    { url: '/queen-1.jpeg', description: 'desc of Queen 1' },
    { url: '/queen-2.jpeg', description: 'desc of Queen 2' },
  ],
};

const roomDataSlice: RoomData[] = [cleoQueen, athenaSuite, zeusSuite];

export default roomDataSlice;
