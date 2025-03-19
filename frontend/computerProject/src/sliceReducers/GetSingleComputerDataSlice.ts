import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productsType } from './getComputerDataSlice';

interface props{
    loading:boolean,
    error:string|null,
    singleData:productsType} 
const initialState:props={
    singleData: {
        id: 0,
        url: '',
        name: '',
        description: '',
        price: "0",
        imgs:[""]
    },loading:false,error:null
}
const getSingleComputerDataSlice=createSlice({
name:"singleComputerData",
initialState,
reducers:{
    fetchLoading:(state)=>{
        state.loading=true;
        state.error=null
    },
    fetchError:(state,action: PayloadAction<string>)=>{
        state.loading=false;
        state.error=action.payload
    },fetchData:(state,action: PayloadAction<productsType>)=>{
        state.loading=false;
        state.error=null;
        state.singleData=action.payload

    },
    fetchSingleDataRequest: (state) => {
        state.loading = true;

    }
   
}
})
export const{fetchLoading,fetchError,fetchData,fetchSingleDataRequest}=getSingleComputerDataSlice.actions

export default getSingleComputerDataSlice.reducer