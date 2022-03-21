import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BadgesService from "../../services/badgeService";


const initialState = [];

export const createBadge = createAsyncThunk(
  "badges/create",
  async ({ title, description }) => {
    const res = await BadgesService.create({ title, description });
    return res.data;
  }
);
export const requestBadge = createAsyncThunk(
  "badges/request",
  async ({ title, description, referance, notes, documents}) => {
    const res = await BadgesService.request({ title, description,referance, notes, documents });
    return res.data;
  }
);

export const getBadge = createAsyncThunk(
  "badges/get",
  async (id) => {
    const res = await BadgesService.get(id);
    return res.data;
  }
);
export const getBadges = createAsyncThunk(
  "badges/get",
  async ({ids}) => {
    const res = await BadgesService.getAll({ids});
    return res.data;
  }
);

export const updateBadge = createAsyncThunk(
  "badges/update",
  async ({ id, data }) => {
    const res = await BadgesService.update(id, data);
    return res.data;
  }
);

export const deleteBadge = createAsyncThunk(
  "badges/delete",
  async ({ id }) => {
    await BadgesService.remove(id);
    return { id };
  }
);

export const deleteAllBadges = createAsyncThunk(
  "badges/deleteAll",
  async () => {
    const res = await BadgesService.removeAll();
    return res.data;
  }
);

export const findBadgesByTitle = createAsyncThunk(
  "badges/findByTitle",
  async ({ title }) => {
    const res = await BadgesService.findByTitle(title);
    return res.data;
  }
);

const badgeSlice = createSlice({
  name: "badge",
  initialState,
  extraReducers: {
    [createBadge.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [getBadges.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updateBadge.fulfilled]: (state, action) => {
      const index = state.findIndex(badge => badge.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteBadge.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    [deleteAllBadges.fulfilled]: (state, action) => {
      return [];
    },
    [findBadgesByTitle.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = badgeSlice;
export default reducer;