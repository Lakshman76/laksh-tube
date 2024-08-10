import { configureStore } from "@reduxjs/toolkit";
import sidenavSlice from "./sidenavSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
  reducer: {
    sidenav: sidenavSlice,
    search: searchSlice,
    chat: chatSlice,
    video: videoSlice
  },
});

export default store;
