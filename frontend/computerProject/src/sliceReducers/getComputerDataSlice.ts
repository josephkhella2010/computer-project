/* import { createSlice,PayloadAction } from "@reduxjs/toolkit";
export interface productsType {
    id: number;
    url: string;
    name: string;
    description: string;
    price: string;
  }
interface props{
    computerData:productsType[],
    loading:boolean,
    error:string| null
}
const initialState:props={
    computerData:[],loading: false,
    error: null
}
const computerDataSlice=createSlice({
    name:"computerData",
    initialState,
    reducers:{
       
        fetchLoading:(state)=>{
            state.loading=true;
            state.error=null

        },
        fetchComputerData:(state,action: PayloadAction<productsType[]>)=>{
            state.loading=false;
            state.computerData=action.payload
        },
        fetchError:(state,action: PayloadAction<string>)=>{
            state.loading=false;
            state.error=action.payload
        }

    }
})
export const {fetchLoading,fetchComputerData,fetchError}=computerDataSlice.actions
export default computerDataSlice.reducer */


// src/redux/slices/computerDataSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface productsType {
    id: number;
    url: string;
    name: string;
    description: string; // Ensure this matches your JSON
    price: string;
    imgs:string[]
}

interface props {
    computerData: productsType[],
    loading: boolean,
    error: string | null
}

const initialState: props = {
    computerData: [],
    loading: false,
    error: null
}

const computerDataSlice = createSlice({
    name: "computerData",
    initialState,
    reducers: {
        fetchLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchComputerData: (state, action: PayloadAction<productsType[]>) => {
            state.loading = false;
            state.computerData = action.payload;
        },
        fetchError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchRequest: (state) => {
            state.loading = true;
        }
    }
})

export const { fetchLoading, fetchComputerData, fetchError, fetchRequest } = computerDataSlice.actions;
export default computerDataSlice.reducer;
