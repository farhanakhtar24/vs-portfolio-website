import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'home',
}

const activeIconSlice = createSlice({
    name: 'activeIcon',
    initialState,
    reducers: {
        setActiveIcon: (state, action) => {
            state.value = action.payload
        }
    }
});

export const activeIconSliceActions = activeIconSlice.actions;
export default activeIconSlice;