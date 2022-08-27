import React, {
  useContext,
  useState,
  useRef,
  FormEvent,
  SyntheticEvent,
} from "react";
import UserDataContext from "../UserDataContext";
import addUserThunk from "./addUserThunk";

import styled from "styled-components/macro";
import BaseModalWrapper from "../../UI/Modal/BaseModalWrapper";
import * as Card from "../../UI/Card/Card";
import Button from "../../UI/Button";
import PendingUserAvatar from "./PendingUserAvatar";

const ImageUrlInput = styled(Card.FormInput)``;

const ConfirmButton = styled(Button)`
  font-size: 1.2rem;
  color: green;
  border-color: green;
  align-self: center;
`;

type PropType = {
  setIsAddingUser: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddUserModal({ setIsAddingUser }: PropType) {
  const udContext = useContext(UserDataContext);
  // type guard
  if (!udContext) throw Error("udContext is null, not initialised");
  const [, udDispatch] = udContext;

  // For controlling what to display when image not found in PendingUserAvatar
  const [hasImgErr, setHasImgErr] = useState(false);

  const [imgUrl, setImgUrl] = useState("");
  const [newName, setNewName] = useState("");
  const imgUrlInputRef = useRef<HTMLInputElement>(null);
  const newNameInputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setIsAddingUser(false);
  };

  const handleImgUrlInput = (event: FormEvent) => {
    setHasImgErr(false);
    setImgUrl((event.target as HTMLInputElement).value);
  };

  const handleNameInput = (event: FormEvent) => {
    setNewName((event.target as HTMLInputElement).value);
  };

  const handleConfirmAdd = async (event: SyntheticEvent) => {
    /**
     * Typeguard
     */
    if (!imgUrlInputRef.current || !newNameInputRef.current) {
      throw Error("Input refs are not assigned to an HTML element");
    }
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
    const newUser = await addUserThunk({ imgUrl, newName });

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
            placeholder="Gimmeee a name!"
            ref={newNameInputRef}
            onInput={handleNameInput}
            required
          />
        </Card.FormEntry>
        <Card.FormEntry>
          <Card.FormLabelSpan>How should I look like?</Card.FormLabelSpan>
          <ImageUrlInput
            placeholder="Gimme an image URL!"
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
