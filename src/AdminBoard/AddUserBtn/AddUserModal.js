import { useContext, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import UserDataContext from "../UserDataContext";
import addUserThunk from "./addUserThunk";

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
  const [, udDispatch] = useContext(UserDataContext);
  const dispatch = useDispatch();

  // For controlling what to display when image not found in PendingUserAvatar
  const [hasImgErr, setHasImgErr] = useState(false);

  const [imgUrl, setImgUrl] = useState("");
  const [newName, setNewName] = useState("");
  const imgUrlInputRef = useRef(null);
  const newNameInputRef = useRef(null);

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

  const handleConfirmAdd = async (event) => {
    /**
     *  Check form validity
     */
    // !!! Browser built-in prompt for invalid inputs will not pop up if event.preventDefault()
    if (
      !imgUrlInputRef.current.validity.valid ||
      !newNameInputRef.current.validity.valid
    ) {
      return;
    }
    event.preventDefault();

    /**
     * Send request
     */
    const newUser = await dispatch(addUserThunk({ imgUrl, newName }));

    // Fake adding new user locally
    udDispatch({
      type: "addUser",
      payload: {
        first_name: newUser.first_name,
        avatar: newUser.avatar,
        id: newUser.id,
      },
    });
    // Close AddUserModal when finished
    setIsAddingUser(false);
  };

  return (
    <BaseModalWrapper onClose={handleClose}>
      <Card.Header>{`Breeeed a new hedgehog! :)`}</Card.Header>
      <PendingUserAvatar
        imgUrl={imgUrl}
        hasImgErr={hasImgErr}
        setHasImgErr={setHasImgErr}
      />
      <Card.Form id="add-user-form">
        <Card.FormEntry>
          <Card.FormLabelSpan>What's my name?</Card.FormLabelSpan>
          <Card.FormInput
            placeholder="Give meee a name!"
            ref={newNameInputRef}
            onInput={handleNameInput}
            required
          />
        </Card.FormEntry>
        <Card.FormEntry>
          <Card.FormLabelSpan>How should I look like?</Card.FormLabelSpan>
          <ImageUrlInput
            placeholder="Paste an URL of an online image"
            ref={imgUrlInputRef}
            onInput={handleImgUrlInput}
            required
          />
        </Card.FormEntry>
      </Card.Form>
      <ConfirmButton form="add-user-form" onClick={handleConfirmAdd}>
        Breeed {newName || "me"} !
      </ConfirmButton>
    </BaseModalWrapper>
  );
}
