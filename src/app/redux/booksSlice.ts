import { createSlice } from "@reduxjs/toolkit";
const booksSlice= createSlice({
    name:"books",
    initialState:{
        allBooks:[],
    },
    reducers:{
        setBooks:(state,action)=>{
            state.allBooks= action.payload;
        },
    },
}) ;
export const {setBooks}=booksSlice.actions;
export default booksSlice.reducer;