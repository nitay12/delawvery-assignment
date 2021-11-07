import React, {useState, Fragment} from 'react'

import {useSelector} from "react-redux";
import { ordersSelector} from "../redux/ordersSlice"

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Modal from "@mui/material/Modal";

import AddIcon from "@mui/icons-material/Add";
import NewOrder from './NewOrder'
import EditOrder from './EditOrder'

function NewOrderFAB() {
  const {editMode} = useSelector(ordersSelector);
    const modalStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      };
      const [openModal, setOpenModal] = useState(false);
      const handleOpenModal = () => setOpenModal(true);
      const handleCloseModal = () => setOpenModal(false);
    
    return (
<Fragment>
          <Fab
            onClick={handleOpenModal}
            color="primary"
            aria-label="add"
            sx={{ position: "fixed", right: 5, bottom: 5 }}
          >
            <AddIcon />
          </Fab>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              {editMode?(<EditOrder/>):(<NewOrder/>)}
            </Box>
          </Modal>
        </Fragment>
    )
}

export default NewOrderFAB
