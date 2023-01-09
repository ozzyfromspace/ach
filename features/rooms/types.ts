import { Picture } from '../picDisplay/PicDisplay';
import { Amenity } from './AmenityIcon';

export enum RoomType {
  'king' = 'king',
  'queen' = 'queen',
  'suite1' = '1-bedroom-suite',
  'suite2' = '2-bedroom-suite',
  'handicap' = 'handicap-king',
  'xKing' = 'extra-large-king',
  'sKing' = 'super king',
}

export interface RoomData {
  roomType: RoomType;
  roomName: string;
  mainDescription: string;
  pictureSlice: Picture[];
  amenities: Amenity[];
}
