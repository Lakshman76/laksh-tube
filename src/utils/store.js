import { configureStore } from "@reduxjs/toolkit";
import sidenavSlice from "./sidenavSlice";

const store = configureStore({
    reducer: {
        sidenav: sidenavSlice,
    },
})

export default store;