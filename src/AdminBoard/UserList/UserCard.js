import UserDataContext from "../UserDataContext";
import { useContext, useState } from "react";
import styled from "styled-components/macro";
import DeleteUserModal from "./DeleteUserModal";

const StyledLi = styled.li`
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
`;

export default function UserCard({ userIndex }) {
  const [isConfirmingDel, setIsConfirmingDel] = useState(false);

  // Extract data
  const [udState] = useContext(UserDataContext);
  const { first_name: userName, avatar: imgUrl } = udState.userData[userIndex];

  const handleChooseDelete = () => {
    setIsConfirmingDel(true);
  };

  return (
    <>
      <StyledLi>
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
        />
      )}
    </>
  );
}
