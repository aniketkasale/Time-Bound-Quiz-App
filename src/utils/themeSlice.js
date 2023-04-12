import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "nav",
  initialState: {
    currentTheme: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      if (state.currentTheme === "light") {
        state.currentTheme = "dark";
      } else {
        state.currentTheme = "light";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
