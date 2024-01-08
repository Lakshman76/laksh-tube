import { createSlice } from "@reduxjs/toolkit";

const sidenavSlice = createSlice({
  name: "sidenav",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = sidenavSlice.actions;
export default sidenavSlice.reducer;
