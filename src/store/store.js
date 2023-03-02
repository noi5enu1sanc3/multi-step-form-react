import { configureStore } from '@reduxjs/toolkit';
import formUpdaterReducer from './formUpdaterSlice';

export default configureStore({
  reducer: {
    formUpdater: formUpdaterReducer,
  },
});
