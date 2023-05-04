import React from "react";
import s from "./Message.module.scss";
type MessageType = {
  message: string;
};
export const Message = (props: MessageType) => {
  return <div className={s.hind}>{props.message}</div>;
};
