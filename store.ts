import { configureStore } from '@reduxjs/toolkit';
import eventPickerReducer from './features/eventPicker';

const store = configureStore({
  reducer: {
    eventPicker: eventPickerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
