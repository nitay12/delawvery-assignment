import { createSlice } from "@reduxjs/toolkit";
const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    id: 1,
    orders: [],
    editedOrder: {},
    editMode: false,
  },
  reducers: {
    addOrder: (state, { payload }) => {
      state.orders.push(payload);
      state.id++;
    },
    removeOrder: (state, { payload }) => {
      state.orders = state.orders.filter((o) => o.id !== payload);
    },
    editMode: (state, { payload }) => {
      // const order = state.orders.filter((o) => o.id === payload)[0];
      // state.editedOrder = order;
      // state.editMode = true;
      for (var i = 0; i < state.orders.length; i++) {
        if (payload === state.orders[i].id) {
          state.editedOrder = state.orders[i];
          state.editMode = true;
        }
      }
    },
    editOrder: (state, { payload }) => {
      for (var i = 0; i < state.orders.length; i++) {
        if (state.editedOrder.id === state.orders[i].id) {
          state.orders[i] = payload;
        }
      }
      state.editMode = false;
      state.editedOrder = {};
    },
    deleteAll: (state) => {
      state.orders = [];
    },
  },
});

export const { addOrder, removeOrder, editOrder, editMode, deleteAll } =
  ordersSlice.actions;
export const ordersSelector = (state) => state.orders;
export default ordersSlice.reducer;
