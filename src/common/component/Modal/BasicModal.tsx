import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "../Button/Button";
import { ChangeEvent, useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
type ModalType = {
  children?: any;
  name?: string;
  callback?: any;
  header?: string;
  mode?: boolean;
  src?: string;
};
export const BasicModal: React.FC<ModalType> = ({ header, name, callback, mode = true, src }) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onClickHandler = () => {
    callback(value);
    setValue("");
    setOpen(false);
  };

  return (
    <>
      <span onClick={handleOpen}>
        {mode ? <Button name={name} /> : <img style={{ marginRight: "10px", cursor: "pointer" }} src={src} alt="" />}
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>{header}</h2>
          <input value={value} onChange={onChangeHandler} type="text" />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button name={"Cancel"} callback={handleClose}></Button>
            <Button name={"Save"} callback={onClickHandler}></Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
