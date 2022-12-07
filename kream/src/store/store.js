import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
// import productSlice from './productSlice';
const store = configureStore({
  reducer:{
    counter:counterSlice.reducer
    // ,product:productSlice.reducer
  }
});
export default store;