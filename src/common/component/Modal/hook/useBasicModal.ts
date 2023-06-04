import * as React from "react";
import { useAppSelector } from "common/hooks";

export const useBasicModal = (callback: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const disabled = useAppSelector((state) => state.app.isLoggedIn);

  const onClickHandler = () => {
    callback();
    setOpen(false);
  };
  return {
    open,
    handleOpen,
    handleClose,
    disabled,
    onClickHandler,
  };
};
