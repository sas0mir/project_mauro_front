import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from '../slices/settingsSlice'
import homepageDataReducer from '../slices/homepageDataSlice';

export const store =  configureStore({
    reducer: {
        settings: settingsReducer,
        homepageData: homepageDataReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;