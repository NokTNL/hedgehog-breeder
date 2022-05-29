import { useContext } from "react";
import { useDispatch } from "react-redux";
import UserDataContext from "../UserDataContext";

import BaseModalWrapper from "../../UI/Modal/BaseModalWrapper";

export default function DeleteUserModal() {
  const userDataCtx = useContext(UserDataContext);

  const handleClose = () => {};

  const handleDelete = async () => {};
  return <BaseModalWrapper onClose={handleClose}></BaseModalWrapper>;
}
