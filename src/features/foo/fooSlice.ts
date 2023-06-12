import { createSlice } from "@reduxjs/toolkit"
import { FullState } from "../../store";

interface FooState {
    bar: string
}

const initState: FooState = {
    bar: 'baz'
}

export const fooSlice = createSlice({
    name: 'foo',
    initialState: initState,
    reducers: {
        append: (state) => { state.bar = 'Thing' }
    }
});

export const {append} = fooSlice.actions;
export const selectFoo = (state: FullState) => state.foo.bar
export default fooSlice.reducer