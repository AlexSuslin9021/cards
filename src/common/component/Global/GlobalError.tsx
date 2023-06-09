import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "common/hooks";

import { toast, ToastContainer } from "react-toastify";
import { appActions } from "app/app.slice";

const GlobalError = () => {
  const error = useAppSelector((state) => state.app.error);
  const dispatch = useAppDispatch();

  if (error !== null) {
    toast.error(error);
  }
  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setAppError({ error: null }));
    }, 2000);
  }, [error]);
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export default GlobalError;
