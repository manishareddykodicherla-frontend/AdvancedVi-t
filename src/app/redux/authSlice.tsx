import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isAuthOpen:false,
    isLoggedIn:false,
    user:null,
}
 export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        openAuth:(state)=>{
            state.isAuthOpen=true;
        },
        closeauth:(state)=>{
            state.isAuthOpen=false;
        },
        login:(state,action)=>{
            state.isLoggedIn=true;
            state.user= action.payload;
            state.isAuthOpen= false;

        },
        logout :(state)=>{
            state.isLoggedIn= false;
            state.user=null;
        },

    },
 });
        
  export const {openAuth,closeauth,login,logout}=authSlice.actions;
 export default authSlice.reducer
