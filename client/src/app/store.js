import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from "../features/pictures.slice";

export default configureStore({
  reducer: {
    pictures: picturesReducer,
  },
});
