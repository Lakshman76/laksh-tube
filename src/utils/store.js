import { configureStore } from "@reduxjs/toolkit";
import sidenavSlice from "./sidenavSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    sidenav: sidenavSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
