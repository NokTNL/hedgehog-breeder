import { useDispatch } from "react-redux";
import { useContext } from "react";
import UserDataContext from "../UserDataContext";

import styled from "styled-components/macro";
import BaseModalWrapper from "../../UI/Modal/BaseModalWrapper";
import * as Card from "../../UI/Card/Card";
import Button from "../../UI/Button";
import deleteUserThunk from "./deleteUserThunk";

const Avatar = styled.img`
  height: 10rem;
  width: 10rem;
  object-fit: cover;
  align-self: center;
  border-radius: 50%;
`;

const ConfirmButton = styled(Button)`
  font-size: 1.2rem;
  color: red;
  border-color: red;
  align-self: center;
`;

export default function DeleteUserModal({ setIsConfirmingDel, userIndex }) {
  const [udState, udDispatch] = useContext(UserDataContext);
  const dispatch = useDispatch();
  const { first_name: userName, avatar: imgUrl } = udState.userData[userIndex];

  const handleClose = () => {
    setIsConfirmingDel(false);
  };

  const handleDelete = async () => {
    await dispatch(deleteUserThunk(userIndex));
    // Fake deleting on remote database locally
    // This will dismount the whole UserCard including this Modal
    udDispatch({ type: "deleteUser", payload: userIndex });
  };

  return (
    <BaseModalWrapper onClose={handleClose}>
      <Card.Header>{`Are you sure you want to adandon ${userName}? :(`}</Card.Header>
      <Avatar src={imgUrl} alt={userName} />
      <ConfirmButton onClick={handleDelete}>Bye {userName}...</ConfirmButton>
    </BaseModalWrapper>
  );
}
