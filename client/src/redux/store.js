
import { configureStore } from '@reduxjs/toolkit'
import badgeReducer from './slices/badgeSlice';

const reducer = {
  badges: badgeReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;