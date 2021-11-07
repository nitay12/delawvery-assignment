import React, { useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { ordersSelector, addOrder, removeOrder } from "../redux/ordersSlice";

import dayjs from "dayjs";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DatePicker from "@mui/lab/DatePicker";
import Snackbar from "@mui/material/Snackbar";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import MyModal from "./MyModal";
import useOnScreen from "../utils/useOnScreen";

function NewOrder() {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const dispatch = useDispatch();
  const { id } = useSelector(ordersSelector);
  const [date, setDate] = useState(dayjs(new Date()));
  const [dateString, setDateString] = useState(date.format("DD/MM/YYYY"));
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const orderData = {
    id,
    firstName,
    lastName,
    dateString,
  };

  //SnackBar
  const [openSnack, setOpenSnack] = useState(false);
  const handleClick = () => {
    setOpenSnack(true);
  };
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  const snackAction = (
    <React.Fragment>
      <Button
        color="secondary"
        size="small"
        onClick={() => {
          dispatch(removeOrder(id - 1));
          handleCloseSnack();
        }}
      >
        בטל
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnack}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box sx={{ flex: 1 }} ml={10} ref={ref}>
      <h2>הזמנה חדשה</h2>
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
            sx={{ flex: 1 }}
            variant="contained"
            onClick={() => {
              handleClick();
              dispatch(addOrder(orderData));
            }}
          >
            הוספה
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnack}
        autoHideDuration={1000}
        onClose={handleCloseSnack}
        message={`הזמנה ${id - 1} נוספה`}
        action={snackAction}
      />
      {isVisible ? null : (
        <MyModal/>
      )}
    </Box>
  );
}

export default NewOrder;
