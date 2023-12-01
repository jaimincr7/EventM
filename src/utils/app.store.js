import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../store/EventStore/event.Slice';

const store = configureStore({
  reducer: {
    event: eventReducer,
  },
});

export default store;
