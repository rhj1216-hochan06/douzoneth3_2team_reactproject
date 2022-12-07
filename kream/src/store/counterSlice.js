import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name:'counterSlice',
  initialState:{value:12345},
  reducers:{
    up:(state, action)=>{
      state.value = state.value + action.payload;
      //직접 액션값은 action.step, payload는 약속되있음
    }
  }
});
export default counterSlice;
export const {up} = counterSlice.actions;