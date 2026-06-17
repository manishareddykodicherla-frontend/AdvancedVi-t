import { configureStore } from '@reduxjs/toolkit'
import  booksSlice  from "./booksSlice";
import authSlice  from './authSlice';
export const store = configureStore({
  reducer: {
    books:booksSlice,
    auth:authSlice
  },
})
export type Rootstate=ReturnType< typeof store.getState>;
export type AppDispatch= typeof store.dispatch;