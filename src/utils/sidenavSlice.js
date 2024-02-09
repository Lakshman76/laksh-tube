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
    closeMenu: (state) => {
      state.isMenuOpen = false;
    }
  },
});

export const { toggleMenu, closeMenu } = sidenavSlice.actions;
export default sidenavSlice.reducer;
