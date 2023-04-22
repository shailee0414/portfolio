import { createSlice } from "@reduxjs/toolkit";

import fetchProfile from "./action";

const profileReducer = createSlice({
  name: "profileReducer",
  initialState: {
    profile: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchProfile.pending]: (state) => {
      state.loading = true;
    },
    [fetchProfile.fulfilled]: (state, action) => {
      state.profile = action.payload;
    },
    [fetchProfile.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});
export default profileReducer.reducer;