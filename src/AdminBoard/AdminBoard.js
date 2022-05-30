import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components/macro";
import Nav from "./Nav/Nav";
import AddUserBtn from "./AddUserBtn/AddUserBtn";
import UserList from "./UserList/UserList";
import loadDataThunk from "./loadDataThunk";
import authSlice from "../Auth/authSlice";

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
  const [hasDataLoaded, setHasDataLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      //*** For testing only */
      dispatch(authSlice.actions.login("987398729347293"));
      await dispatch(loadDataThunk());
      // Load page when data has loaded
      setHasDataLoaded(true);
    })();
  }, []);

  return (
    <PageCtn>
      <Nav />
      <BoardCtn>
        <AddUserBtn />
        {hasDataLoaded && <UserList />}
      </BoardCtn>
    </PageCtn>
  );
}
