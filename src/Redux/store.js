import { configureStore } from '@reduxjs/toolkit'
import activeIconSlice from './active-icon-slice';

const store = configureStore({
    reducer: {
        activeIcon: activeIconSlice.reducer,
    },
});

export default store;
