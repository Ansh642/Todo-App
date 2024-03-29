import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";


// here we are creating the store
const store = configureStore({
  reducer: reducer,
});

export default store;
