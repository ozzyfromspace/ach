import Picker from './Picker';

export enum OptionGroup {
  EVENTS_GROUP = 'EVENTS_GROUP',
}

export interface Option {
  id: string;
  name: string;
  group: OptionGroup;
  selected: boolean;
}

export default Picker;
