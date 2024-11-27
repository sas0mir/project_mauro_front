import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        theme: 'dark',
        language: 'it'
    }, reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export const { setTheme, setLanguage } = settingsSlice.actions
export default settingsSlice.reducer