import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchState = {
  query: string;
};

const initialState: SearchState = {
  query: "",
};

const filterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    clearSearch: (state) => {
      state.query = "";
    },
  },
});

export const { setSearchQuery, clearSearch } = filterSlice.actions;
export default filterSlice.reducer;