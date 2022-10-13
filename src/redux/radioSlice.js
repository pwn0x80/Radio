import { createSlice } from "@reduxjs/toolkit";

export const radioSlice = createSlice({
  name: "currentRadioUrl",
  initialState: {
    audio: {
      name: null,
      trackName: null,
      baseUrl: null,
      converPic: "",
      uuid: null,
      genres: null,
      currentplayingUrl: null,
      tag: "",
      color: "",
    },
    pending: false,
    error: false,


  },

  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    radioBaseUrlUpdateSuccess: (state, action) => {
      state.pending = false;
      state.audio.baseUrl = action.payload?.baseUrl;
    },
    updateCurrentPlaying: (state, action) => {
      state.pending = false;
      state.audio.trackName = action.payload.trackName;
      state.audio.converPic = action.payload.coverPic;
      state.audio.uuid = action.payload.uuid;
      state.audio.currentplayingUrl = action.payload.currentplayingUrl;
      state.audio.color = action.payload.color;
    },
    radioUpdateGenreSuccess: (state, action) => {
      state.audio.name = action.payload.name;
      state.audio.trackName = action.payload.trackName;
      state.pending = false;
      state.audio.genres = action.payload.genres;
    },
    updateError: (state) => {
      state.error = true;
      state.pending = false;
    }
  }
});
export const {
  updateStart,
  radioUpdateGenreSuccess,
  updateCurrentPlaying,
  updateError,
  radioBaseUrlUpdateSuccess
} = radioSlice.actions;
export default radioSlice.reducer;
