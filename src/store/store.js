// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import formUpdaterReducer from '../components/FormNav/formUpdaterSlice';

export default configureStore({
  reducer: {
    formUpdater: formUpdaterReducer,
  },
});
