import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Option, OptionGroup } from '../picker';

export interface EventPickerOption extends Option {}

const initialState: EventPickerOption[] = [
  {
    id: '1',
    name: 'Birthdays',
    group: OptionGroup.EVENTS_GROUP,
    selected: true,
  },
  {
    id: '2',
    name: 'Weddings & Aniversaries',
    group: OptionGroup.EVENTS_GROUP,
    selected: false,
  },
  {
    id: '3',
    name: 'Graduations',
    group: OptionGroup.EVENTS_GROUP,
    selected: false,
  },
];

interface UpdateSelectedEventOption {
  eventId: string;
}

const eventPickerSlice = createSlice({
  name: 'user_jobmodel_slice',
  initialState,
  reducers: {
    updateSelectedJobModel: {
      reducer: (
        state: EventPickerOption[],
        action: PayloadAction<UpdateSelectedEventOption>
      ) => {
        let foundPrevSelected = false;
        let foundNewSelected = false;
        for (const r of state) {
          if (r.selected === true) {
            r.selected = false;
            foundPrevSelected = true;
          }
          if (r.id === action.payload.eventId) {
            r.selected = true;
            foundNewSelected = true;
          }
          if (foundNewSelected && foundPrevSelected) {
            break;
          }
        }
        return state;
      },

      prepare: (eventId: string) => {
        return {
          payload: {
            eventId,
          },
        };
      },
    },
  },
});

export const eventSelector = (state: RootState) => state.eventPicker;
export const eventIdSelector = (state: RootState) =>
  state.eventPicker.map((ev) => ev.id);
export const currentEventSelector = (state: RootState) =>
  state.eventPicker.filter((event) => event.selected)[0] ?? initialState[0]!;

export const { updateSelectedJobModel } = eventPickerSlice.actions;

const userJobModelsReducer = eventPickerSlice.reducer;
export default userJobModelsReducer;
