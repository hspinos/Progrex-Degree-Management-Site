import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import badgeReducer from './slices/badgeSlice';



const reducer = {
  badge: badgeReducer
}


const store = configureStore(
  {
  reducer: reducer,
  devTools: true,
}
)

export default store
