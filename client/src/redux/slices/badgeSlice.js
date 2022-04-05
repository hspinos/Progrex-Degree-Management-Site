import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BadgesService from "../../services/badgeService";


const initialState = []

export const createBadge = createAsyncThunk(
  "badge/create",
  async ({ badgeName, description, isApproved }) => {
    const res = await BadgesService.create({ badgeName, description,isApproved });
    return res.data;
  }
);
export const requestBadge = createAsyncThunk(
  "badge/request",
  async ({ badgeName, description, referance, isApproved}) => {
    const res = await BadgesService.request({ badgeName, description,referance, isApproved });
    return res.data;
  }
);

export const getBadge = createAsyncThunk(
  "badge/get",
  async (id) => {
    const res = await BadgesService.get(id);
    return res.data;
  }
);
export const getBadges = createAsyncThunk(
  "badge/get",
  async ({ids}) => {
    const res = await BadgesService.getAll({ids});
    console.log(res.data)
    return res.data;
  }
);

export const updateBadge = createAsyncThunk(
  "badge/update",
  async ({ id, data }) => {
    const res = await BadgesService.update(id, data);
    return res.data;
  }
);

export const deleteBadge = createAsyncThunk(
  "badge/delete",
  async ({ id }) => {
    await BadgesService.remove(id);
    return { id };
  }
);

export const deleteAllBadges = createAsyncThunk(
  "badge/deleteAll",
  async () => {
    const res = await BadgesService.removeAll();
    return res.data;
  }
);

export const findBadgesByTitle = createAsyncThunk(
  "badge/findByTitle",
  async ({ badgeName }) => {
    const res = await BadgesService.findByTitle(badgeName);
    return res.data;
  }
);

const badgeSlice = createSlice({
  name: "badges",
  initialState,
  extraReducers: {
    [createBadge.fulfilled]: (state, action) => {
      state.push(action.payload)
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