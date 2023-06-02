import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "../Button/Button";
import { useAppSelector } from "common/hooks";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 2,
};
type ModalType = {
  children?: any;
  name?: string;
  callback?: any;
  header?: string;
  mode?: boolean;
  src?: string;
  buttonName?: string;
};
export const BasicModal: React.FC<ModalType> = ({ header, children, name, buttonName, callback, mode = true, src }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const disabled = useAppSelector((state) => state.app.isLoggedIn);

  const onClickHandler = () => {
    callback();
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
          <h2 style={{ marginBottom: "20px", marginTop: "0" }}>{header}</h2>
          <hr style={{ marginBottom: "20px", padding: "0px" }} />

          {children}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button name={"Cancel"} callback={handleClose}></Button>
            <Button
              disabled={disabled}
              name={buttonName === "Delete" ? "Delete" : "Save"}
              callback={onClickHandler}
            ></Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
