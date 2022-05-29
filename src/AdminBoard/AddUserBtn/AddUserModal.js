import { useContext, useState } from "react";
import UserDataContext from "../UserDataContext";

import styled from "styled-components/macro";
import BaseModalWrapper from "../../UI/Modal/BaseModalWrapper";
import * as Card from "../../UI/Card/Card";
import Button from "../../UI/Button";
import PendingUserAvatar from "./PendingUserAvatar";

const ImageUrlInput = styled(Card.FormInput)`
  min-width: 18em;
`;

const ConfirmButton = styled(Button)`
  font-size: 1.2rem;
  color: green;
  border-color: green;
  align-self: center;
`;

export default function AddUserModal({ setIsAddingUser }) {
  const userDataCtx = useContext(UserDataContext);
  // For controlling what to display when image not found in PendingUserAvatar
  const [hasImgErr, setHasImgErr] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [newName, setNewName] = useState("");

  const handleClose = () => {
    setIsAddingUser(false);
  };

  const handleImgUrlInput = (event) => {
    setHasImgErr(false);
    setImgUrl(event.target.value);
  };

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  };

  return (
    <BaseModalWrapper onClose={handleClose}>
      <Card.Header>{`Breeeed a new hedgehog! :)`}</Card.Header>
      <PendingUserAvatar
        imgUrl={imgUrl}
        hasImgErr={hasImgErr}
        setHasImgErr={setHasImgErr}
      />
      <Card.Form>
        <Card.FormEntry>
          <Card.FormLabelSpan>What's my name?</Card.FormLabelSpan>
          <Card.FormInput onInput={handleNameInput} />
        </Card.FormEntry>
        <Card.FormEntry>
          <Card.FormLabelSpan>How should I look like?</Card.FormLabelSpan>
          <ImageUrlInput
            placeholder="Paste an URL of an online image"
            onInput={handleImgUrlInput}
          />
        </Card.FormEntry>
      </Card.Form>
      <ConfirmButton>Breeed {newName || "me"} !</ConfirmButton>
    </BaseModalWrapper>
  );
}
