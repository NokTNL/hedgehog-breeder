import styled from "styled-components/macro";
import Nav from "./Nav/Nav";
import AddUserBtn from "./AddUserBtn/AddUserBtn";
import UserList from "./UserList/UserList";
import UserDataContext from "./UserDataContext";

const PageCtn = styled.main`
  height: 100%;
  display: flex;
`;
const BoardCtn = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  // This container is scrollable for overflowing <UserList>, but <AddUserBtn> will be sticky
  overflow-y: scroll;
`;

export default function AdminBoard() {
  return (
    // <UserDataContext.Provider>
    <PageCtn>
      <Nav />
      <BoardCtn>
        <AddUserBtn />
        <UserList />
      </BoardCtn>
    </PageCtn>
    // </UserDataContext.Provider>
  );
}
