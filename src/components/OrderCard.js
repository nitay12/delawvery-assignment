import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeOrder, editMode, ordersSelector } from "../redux/ordersSlice";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

import MyButton from "./MyButton";

function OrderCard(props) {
    const {editedOrder} = useSelector(ordersSelector)
  const dispatch = useDispatch();
  return (
    <Card
        sx = {editedOrder.id===props.id ? (
            {bgcolor: '#f7c54f'}  
            ):(
            null
        )}
    >
      <CardHeader
        action={
          <Grid container>
            {editedOrder.id===props.id ? (null) : (
              <Grid item>
                <MyButton
                  onClick={() => dispatch(editMode(props.id))}
                  aria-label="edit"
                  tip="ערוך"
                  sx={{
                    flex: 1,
                    ":hover": {
                      color: "#f5ad42",
                    },
                  }}
                >
                  <EditIcon />
                </MyButton>
              </Grid>
            )}
            <Grid item>
              <MyButton
                aria-label="delete"
                tip="מחק"
                // sx={{
                //   ":hover": {
                //     color: "red",
                //   },
                // }}
                onClick={() => dispatch(removeOrder(props.id))}
              >
                <CloseIcon />
              </MyButton>
            </Grid>
          </Grid>
        }
        title={`הזמנה ${props.id}`}
        subheader={
          <Fragment>
            <Typography variant="h6">פרטים</Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >{`${props.firstName} ${props.lastName}`}</Typography>
            <Typography variant="body2" color="text.secondary">
              {props.date}
            </Typography>
          </Fragment>
        }
      ></CardHeader>
    </Card>
  );
}

export default OrderCard;
