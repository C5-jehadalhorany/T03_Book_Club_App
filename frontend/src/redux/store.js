import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/user"

export default configureStore({
    reducer: {
        auth: authSlice
    },
});