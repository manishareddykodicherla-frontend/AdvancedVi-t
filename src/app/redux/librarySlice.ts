import { createSlice } from "@reduxjs/toolkit";
const initialState:{savedBooks:any[]}={
    savedBooks:[]
}
    
 export const librarySlice = createSlice({
    name:'library',
    initialState,
    reducers:{
        addSavedBook:(state, action)=>{
            const alreadySaved= state.savedBooks.find(
                (book:any)=>book.id=== action.payload.id
            )
            if (!alreadySaved){
                state.savedBooks.push(action.payload);
            }
        },
        removeSavedBook:(state,action)=>{
            state.savedBooks= state.savedBooks.filter(
                (book:any)=>book.id!==action.payload
            );
        }
    }
 })
        
  export const {addSavedBook, removeSavedBook}=librarySlice.actions;
 export default librarySlice.reducer
