import { configureStore } from '@reduxjs/toolkit';
import SliceName from '../commons/constants/SliceName';
import booksSlice from './slices/booksSlice';


export default configureStore({
    reducer: {
        [SliceName.books]: booksSlice,
    }
});