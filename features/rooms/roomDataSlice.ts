import { king_data } from './king';
import { RoomData } from './types';
// import { handicap_data } from './handicap';
import { queen_data } from './queen';
// import { sKing_data } from './s-king';
// import { suite1_data } from './suite1';
// import { suite2_data } from './suite2';
// import { xKing_data } from './x-king';

const roomDataSlice: RoomData[] = [
  king_data,
  queen_data,
  // xKing_data,
  // sKing_data,
  // handicap_data,
  // suite1_data,
  // suite2_data,
];

export default roomDataSlice;
