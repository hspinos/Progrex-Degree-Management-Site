import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BadgesService from "../../services/badgeService";


const initialState = []


export const createBadge = createAsyncThunk(
  "badge/create",
  async ({ badgeName, description, status, dateApproved, dateDeclined, dateRequested,isCommon, requester }) => {
    const res = await BadgesService.create({ badgeName, description,status, dateApproved, dateDeclined, dateRequested,isCommon, requester });
    return res.data;
  }
);
export const requestBadge = createAsyncThunk(
  "badge/request",
  async ({ badgeName, description, referance, status, dateApproved, dateDeclined, dateRequested,isCommon, requester}) => {
    const res = await BadgesService.request({ badgeName, description,referance, status, dateApproved, dateDeclined, dateRequested,isCommon, requester });
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

export const approveBadge = createAsyncThunk(
  "badge/approve",
  async (id) => {
    const res = await BadgesService.approveBadge(id);
    return res.data;
  }
);

export const denyBadge = createAsyncThunk(
  "badge/decline",
  async (id) => {
    const res = await BadgesService.denyBadge(id);
    return res.data;
  }
);


export const listBadge = createAsyncThunk(
  "badge/list",
  async () => {
    const res = await BadgesService.list();
    return res.data;
  }
);
export const getBadgesByIds = createAsyncThunk(
  "badge/get",
  async ({ids}) => {
    const res = await BadgesService.getAllByIds({ids});
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
  name: "badge",
  initialState,
  reducers:{
    [approveBadge.fulfilled]:(state,action)=>{
      // let index = state.findIndex(({ id }) => id === action.payload.id);
      // state.splice(index, 1);},
      return action.payload},
  },
  extraReducers: {
    [createBadge.fulfilled]: (state, action) => {
      state.push(action.payload)
    },
    [getBadgesByIds.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [listBadge.fulfilled]:(state,action)=>{
     return [...action.payload]
    },

    
    [denyBadge.fulfilled]:(state,action)=>{
    //  return action.payload
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