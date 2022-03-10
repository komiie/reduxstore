import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {studentHelper} from "../features/students/studentHelper";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    StudentName: studentReducer, 

  },
});
