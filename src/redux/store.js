import { configureStore } from '@reduxjs/toolkit'
import ordersReducer from '../redux/ordersSlice'
export default configureStore({
    reducer: {
      orders: ordersReducer,
    },
  })