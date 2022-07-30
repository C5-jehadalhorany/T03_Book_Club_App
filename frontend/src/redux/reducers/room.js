import { createSlice } from "@reduxjs/toolkit";


export const room = createSlice({
    name: "room",
    initialState: {
        room: [],


    }, reducers: {
        addroom: (state, actions) => {
            state.room = actions.payload
        },

        deleteroom: (state, actions) => {
            state.room = state.room.filter((element) => {
                return element.id !== actions.payload
            })
        }

    },

},
);


export const { addroom, deleteroom } = room.actions;
export default room.reducer;