import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/user"
import roomSlice from "./reducers/room"
export default configureStore({
    reducer: {
        auth: authSlice,
        room: roomSlice
    },
});