import { configureStore } from '@reduxjs/toolkit';
import formUpdaterReducer from '../components/FormNav/formUpdaterSlice';

export default configureStore({
  reducer: {
    formUpdater: formUpdaterReducer,
  },
});
