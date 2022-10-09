import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "./store"
import { HYDRATE } from "next-redux-wrapper"
// Type for language
export type Language = "en" | "es"

// Type for our state
export interface LanguageState {
  languageState: Language;
}

// Initial state
const initialState: LanguageState = {
  languageState: "en",
}

// Actual Slice
export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {

    // Action to set the language status
    setLanguageState(state, action) {
      state.language = action.payload
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.language,
        };
      },
    },

  },
})

export const { setLanguageState } = languageSlice.actions

export const selectLanguageState = (Language: AppState) => state.language.languageState

export default languageSlice.reducer
