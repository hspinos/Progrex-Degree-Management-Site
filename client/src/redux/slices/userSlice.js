import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UsersService from "../../services/userService";

const initialState = [];

export const createUser = createAsyncThunk(
  "users/create",
  async ({ title, description }) => {
    const res = await UsersService.create({ title, description });
    return res.data;
  }
);

export const getUsers = createAsyncThunk(
  "users/get",
  async () => {
    const res = await UsersService.getAll();
    return res.data;
  }
);

export const updateUser = createAsyncThunk(
  "users/update",
  async ({ id, data }) => {
    const res = await UsersService.update(id, data);
    return res.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/delete",
  async ({ id }) => {
    await UsersService.remove(id);
    return { id };
  }
);

export const deleteAllUsers = createAsyncThunk(
  "users/deleteAll",
  async () => {
    const res = await UsersService.removeAll();
    return res.data;
  }
);

export const findUsersByTitle = createAsyncThunk(
  "users/findByTitle",
  async ({ title }) => {
    const res = await UsersService.findByTitle(title);
    return res.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [createUser.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [getUsers.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updateUser.fulfilled]: (state, action) => {
      const index = state.findIndex(user => user.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteUser.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    [deleteAllUsers.fulfilled]: (state, action) => {
      return [];
    },
    [findUsersByTitle.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = userSlice;
export default reducer;