import {createSlice} from "@reduxkjs/toolkit";

const initialState = {
user: null,
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user=action.payload;
        },
    }
});

export default userSlice.reducer;

export const {setUser} = userSlice.actions;