import { configureStore } from '@reduxjs/toolkit'
import fooReducer from './features/foo/fooSlice';

export const store = configureStore({
    reducer: {
        foo: fooReducer
    }
});

export type FullState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
