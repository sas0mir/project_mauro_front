import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from '../slices/settingsSlice'
import homepageDataReducer from '../slices/homepageDataSlice';
import metaReducer from '../slices/metaSlice';

export const store =  configureStore({
    reducer: {
        settings: settingsReducer,
        homepageData: homepageDataReducer,
        meta: metaReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;