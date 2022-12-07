import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name:'productSlice',
  initialState:{goods:[
    {
      id: 1,
      name: "아더에러 x 자라 패치워크 오버사이즈 니트 스웨터 멀티컬러",
      price: 313000,
      provider: "Ader Error",
      image: "/images/image001.png",
      category: "의류"
    },{
      id: 2,
      name: "텐씨 아틱 다운 파카 그레이",
      price: 840000,
      provider: "Ten C",
      image: "/images/image002.png",
      category: "의류"
    }
  ]},
  value:0,
  reducers:{
    up:(state, action)=>{
      state.value = state.value + action.payload;
      //직접 액션값은 action.step, payload는 약속되있음
    }
  }
});
export default productSlice;
export const {up} = productSlice.actions;