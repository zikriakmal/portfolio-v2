import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  activeSection: string;
  navOpen: boolean;
  theme: "dark" | "light" | "system";
}

const initialState: UIState = {
  activeSection: "hero",
  navOpen: false,
  theme: "system",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload;
    },
    toggleNav(state) {
      state.navOpen = !state.navOpen;
    },
    closeNav(state) {
      state.navOpen = false;
    },
    setTheme(state, action: PayloadAction<"dark" | "light" | "system">) {
      state.theme = action.payload;
    },
  },
});

export const { setActiveSection, toggleNav, closeNav, setTheme } = uiSlice.actions;
export default uiSlice.reducer;
