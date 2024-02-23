import { configureStore } from "@reduxjs/toolkit";
import sidenavSlice from "./sidenavSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer: {
        sidenav: sidenavSlice,
        search : searchSlice,
    },
})

export default store;