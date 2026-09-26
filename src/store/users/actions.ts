import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersAxios } from "../../api/users.axios";
import type { IUser } from "../../interfaces/user.interface";

export const fetchUsers = createAsyncThunk(
    "users/fetchAll",
    async (_, thunkApi) => {
        try {
            const res = await usersAxios.get<IUser[]>('users')
            return res.data
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue('Users Not Found')
        }
    }
);
