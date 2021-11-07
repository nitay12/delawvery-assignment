import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { ordersSelector, editOrder } from "../redux/ordersSlice";

import dayjs from "dayjs";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DatePicker from "@mui/lab/DatePicker";

function EditOrder(props) {
  const { editedOrder } = useSelector(ordersSelector);
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState(editedOrder.dateString);
  const [firstName, setfirstName] = useState(editedOrder.firstName);
  const [lastName, setlastName] = useState(editedOrder.lastName);
  const orderData = {
    id: editedOrder.id,
    firstName,
    lastName,
    dateString,
  };
  return (
    <Box sx={{ flexGrow: 1 }} ml={10}>
      <h2>{`הזמנה ${editedOrder.id}`}</h2>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <TextField
            id="first-name"
            label="שם פרטי"
            variant="outlined"
            value={firstName}
            onChange={(event) => {
              setfirstName(event.target.value);
            }}
          />
        </Grid>
        <Grid item md={8}>
          <TextField
            id="last-name"
            label="שם משפחה"
            variant="outlined"
            value={lastName}
            onChange={(event) => {
              setlastName(event.target.value);
            }}
          />
        </Grid>
        <Grid item md={8}>
          <DatePicker
            label="תאריך"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
              setDateString(dayjs(newValue).format("DD/MM/YYYY"));
            }}
            renderInput={(params) => <TextField {...params} />}
          />{" "}
        </Grid>
        <Grid item md={8}>
          <Button
            sx={{ flexGrow: 1 }}
            variant="contained"
            onClick={() => {
              dispatch(editOrder(orderData));
            }}
          >
            עדכון
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default EditOrder;
