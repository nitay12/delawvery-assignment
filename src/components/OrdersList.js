import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordersSelector, deleteAll } from "../redux/ordersSlice";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import OrderCard from "./OrderCard";

function OrdersList() {
  const dispatch = useDispatch();
  const { orders } = useSelector(ordersSelector);

  let ordersCardsMap = orders.map((order, index) => (
    <Grid item key={index}>
      <OrderCard
        id={order.id}
        firstName={order.firstName}
        lastName={order.lastName}
        date={order.dateString}
      />
    </Grid>
  ));
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <h3>רשימת הזמנות</h3>
        <Grid container spacing={2}>
          <Grid item>
            <p>מספר הזמנות: {orders.length}</p>
          </Grid>
          {orders.length > 0?(
            <Grid item>
            <Button
                onClick={() =>{dispatch(deleteAll())}}
                variant="contained"
                color="secondary"
            >מחק הכל</Button>
          </Grid>
          ):(
              null
          )
          }
        </Grid>
      </Grid>

      {ordersCardsMap}
    </Grid>
  );
}

export default OrdersList;
