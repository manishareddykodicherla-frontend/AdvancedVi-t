import { configureStore } from '@reduxjs/toolkit'
import  booksSlice  from "./booksSlice";
import authSlice  from './authSlice';
import librarySlice  from './librarySlice';
export const store = configureStore({
  reducer: {
    books:booksSlice,
    auth:authSlice,
    library:librarySlice,
  },
})
export type Rootstate=ReturnType< typeof store.getState>;
export type AppDispatch= typeof store.dispatch;