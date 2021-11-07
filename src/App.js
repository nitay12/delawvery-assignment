import "./App.css";

import { useSelector } from "react-redux";
import { ordersSelector } from "./redux/ordersSlice";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ManuBar from "./components/ManuBar";
import NewOrder from "./components/NewOrder";

import OrdersList from "./components/OrdersList";
import EditOrder from "./components/EditOrder";

function App() {
  const { editMode, editedOrder } = useSelector(ordersSelector);
  return (
    <Box sx={{width: '100%',flexGrow: 1, margin:0, padding:0 }}>
      <ManuBar title="ניהול הזמנות" />
      <Box sx={{ ml:4 }}>
        <Grid container spacing={2}>
          <Grid item sm={"auto"}>
            <OrdersList />
          </Grid>
          <Grid item sm={8}>
            {editMode ? <EditOrder order={editedOrder} /> : <NewOrder />}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
