import { configureStore } from "@reduxjs/toolkit";
import radioReducer from "./radioSlice"

export default configureStore({
  reducer: {
    radio: radioReducer
  }
})
