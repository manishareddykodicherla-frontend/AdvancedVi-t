import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isAuthOpen:false,
    isLoggedIn:false,
    user:null,
    isSubscribed:false,
    email:"test@test.com"
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
            state.email="test@test.com"

        },
        logout :(state)=>{
            state.isLoggedIn= false;
            state.user=null;
        },
subscribe:(state)=>{
    state.isSubscribed=true;
},
    },
 });
        
  export const {openAuth,closeauth,login,logout, subscribe}=authSlice.actions;
 export default authSlice.reducer
