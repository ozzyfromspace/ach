import { handicap_data } from './handicap';
import { king_data } from './king';
import { queen_data } from './queen';
import { sKing_data } from './s-king';
import { suite1_data } from './suite1';
import { suite2_data } from './suite2';
import { RoomData } from './types';
import { xKing_data } from './x-king';

const roomDataSlice: RoomData[] = [
  king_data,
  xKing_data,
  sKing_data,
  handicap_data,
  queen_data,
  suite1_data,
  suite2_data,
];

export default roomDataSlice;
