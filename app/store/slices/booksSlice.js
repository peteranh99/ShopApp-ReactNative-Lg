import { createSlice } from '@reduxjs/toolkit';
import SliceName from '../../commons/constants/SliceName';

const sliceName = SliceName.books;
const initialState = {
    items: [],
};

const booksSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
    
    }
});

export const {

} = booksSlice.actions;
export default booksSlice.reducer;