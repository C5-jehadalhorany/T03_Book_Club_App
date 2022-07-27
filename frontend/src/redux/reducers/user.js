import { createSlice } from "@reduxjs/toolkit";


export const auth = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || "",
        Islogin: localStorage.getItem("token") ? true : false,
        role_id: localStorage.getItem("role_id") || "",
        username: localStorage.getItem("username") || ""

    }, reducers: {
        login: (state, action) => {
            state.Islogin = true
            state.token = action.payload.token
            state.role_id = action.payload.role_id
            state.username = action.payload.username
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("role_id", action.payload.role_id)
            localStorage.setItem("username", action.payload.username)
        },
        logout: (state, action) => {
            state.token = "";
            state.username = "";
            state.role_id = "";
            state.Islogin = false;
            localStorage.clear()
        
        }
    },
});


export const { login, logout } = auth.actions;
export default auth.reducer;