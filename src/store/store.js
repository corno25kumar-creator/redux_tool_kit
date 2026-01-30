import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import usersSlice from './features/users/userSlice'

const store = configureStore({
    reducer:{
        counter: counterSlice,
        users: usersSlice
    }
});

export default store