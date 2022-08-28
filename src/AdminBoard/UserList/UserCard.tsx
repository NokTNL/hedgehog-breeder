import UserDataContext from "../UserDataContext";
import { useContext, useState } from "react";
import styled from "styled-components/macro";
import DeleteUserModal from "./DeleteUserModal";
import { css } from "styled-components";

type StyledLiProp = {
  isDismounting: boolean;
};

const StyledLi = styled.li<StyledLiProp>`
  // For positioning children
  position: relative;

  border: 0.05rem solid lightgray;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem -0.3rem rgb(10 10 10 / 10%);

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  // animation on initial render
  animation: user-card-render 0.8s;

  // animation on dismounting
  ${(props) =>
    props.isDismounting &&
    css`
      animation: user-card-dismount 2s forwards;
    `}

  &:hover {
    transition: transform 0.4s;
    transform: translateY(-0.3rem) scale(1.05);
  }

  @keyframes user-card-render {
    from {
      opacity: 0;
      transform: scale(0.7);
    }
    50% {
      transform: scale(1.1);
      animation-timing-function: ease-in;
    }
  }

  @keyframes user-card-dismount {
    12.5%,
    31.3%,
    43.7% {
      transform: rotate(-5deg);
    }
    25%,
    37.5% {
      transform: rotate(5deg);
    }
    50% {
      transform: none;
    }
    60% {
      transform: none;
      animation-timing-function: cubic-bezier(1, 0.005, 0.94, 0.55);
    }
    to {
      transform: scale(0);
    }
  }
`;

const Avatar = styled.img`
  object-fit: cover;
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
`;

const DeleteTxt = styled.span`
  display: none;
`;

const DeleteBtn = styled.button`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;

  color: red;
  font-size: 1.3rem;

  &:hover {
    transition: transform 0.3s;
    transform: scale(1.2);
  }

  &:active {
    transition: none;
    transform: translateY(0.1rem) scale(1.1);
  }
`;

type PropType = {
  userIndex: number;
};

export default function UserCard({ userIndex }: PropType) {
  const [isConfirmingDel, setIsConfirmingDel] = useState(false);

  // Extract data
  const [udState, udDispatch] = useContext(UserDataContext)!;
  const { first_name: userName, avatar: imgUrl } = udState.userData[userIndex];

  const handleChooseDelete = () => {
    setIsConfirmingDel(true);
  };

  /**
   * For delayed deletion of this UserCard after animation
   */
  const [isDismounting, setIsDismounting] = useState(false);
  const delayDelCard = () => {
    setIsDismounting(true);
    setTimeout(() => {
      /**
       * Fake deleting on remote database locally
       */
      // This will dismount the whole UserCard & its DEleteUserModal
      udDispatch({
        type: "deleteUser",
        payload: userIndex,
      });
    }, 2500);
  };

  return (
    <>
      <StyledLi isDismounting={isDismounting}>
        <Avatar src={imgUrl} alt={userName} />
        <div>{userName}</div>
        <DeleteBtn onClick={handleChooseDelete}>
          {/* For accessibility */}
          <DeleteTxt>Delete</DeleteTxt>
          <i className="bi bi-trash"></i>
        </DeleteBtn>
      </StyledLi>
      {isConfirmingDel && (
        <DeleteUserModal
          userIndex={userIndex}
          setIsConfirmingDel={setIsConfirmingDel}
          delayDelCard={delayDelCard}
        />
      )}
    </>
  );
}
