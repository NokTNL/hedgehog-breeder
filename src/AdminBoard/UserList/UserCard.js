import UserDataContext from "../UserDataContext";
import { useContext } from "react";
import styled from "styled-components/macro";

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
`;

const DeleteBtn = styled.button`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;

  color: red;
  font-size: 1.3rem;
`;

export default function UserCard({ userIndex }) {
  const userDataCtx = useContext(UserDataContext);
  const { first_name: userName, avatar: imgUrl } = userDataCtx[userIndex];

  const handleDelete = () => {
    // *** Do something with userIndex
    console.log(userIndex);
  };

  return (
    <>
      <StyledLi>
        <Avatar src={imgUrl} alt={userName} />
        <div>{userName}</div>
        <DeleteBtn onClick={handleDelete}>
          <i className="bi bi-trash"></i>
        </DeleteBtn>
      </StyledLi>
    </>
  );
}
