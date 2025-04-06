import { createSlice } from "@reduxjs/toolkit";

interface IUserData {
    id: number;
    session: string;
    name: string;
    fullName: string;
    email: string;
    role: string;
    lastLogin: Date;
    isOnline: boolean;
    isBanned: boolean;
    rating: number;
    coins: number;
    level: number;
}

export const metaSlice = createSlice({
    name: 'meta',
    initialState: {
        isAuthorized: false,
        userData: <IUserData | null>{}
    }, reducers: {
        setIsAuthorized: (state, action) => {
            state.isAuthorized = action.payload
        },
        setUserData: (state, action) => {
            if (state.userData && action.payload.session !== state.userData.session) {
                state.userData = null
            }
            state.userData = action.payload
        }
    }
})

export const { setIsAuthorized, setUserData } = metaSlice.actions
export default metaSlice.reducer