// import * as React from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import { Button } from "../Button/Button";
// import { ChangeEvent, useState } from "react";
// import { useAppDispatch } from "common/hooks";

// import { packsThunks } from "features/Packs/pack.slice";
//
// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
// type ModalType = {
//   children?: any;
//   callback?: any;
//   id: string;
// };
// export const UpdateModal: React.FC<ModalType> = ({ children, callback, id }) => {
//   const dispatch = useAppDispatch();
//   const [value, setValue] = useState("");
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.currentTarget.value);
//   };
//   const onClickHandler = () => {
//     dispatch(packsThunks.updatePackTC({ cardsPack: { _id: id, name: value } }));
//     setValue("");
//     setOpen(false);
//   };
//
//   return (
//     <>
//       <span onClick={handleOpen}>
//         <img style={{ marginRight: "10px", cursor: "pointer" }} src={pencil} alt="update pack" />
//       </span>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <h2> Edit Pack</h2>
//           <input value={value} onChange={onChangeHandler} type="text" />
//           <Button name={"Save"} callback={onClickHandler}></Button>
//         </Box>
//       </Modal>
//     </>
//   );
// };

import React from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import { useAppDispatch } from "common/hooks";
import pencil from "../../../common/Image/pencil.svg";
import { packsThunks } from "features/Packs/pack.slice";
type UpdateModalType = {
  id: string;
};
export const UpdateModal: React.FC<UpdateModalType> = ({ id }) => {
  const dispatch = useAppDispatch();
  const onClickHandler = (value: string) => {
    dispatch(packsThunks.updatePackTC({ cardsPack: { _id: id, name: value } }));
  };
  return (
    <BasicModal
      name={"Edit pack"}
      callback={onClickHandler}
      header={"Edit pack"}
      src={pencil}
      mode={false}
    ></BasicModal>
  );
};
