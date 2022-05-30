import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UserDataContext, { useUserData } from "./UserDataContext";

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
  // Top level state & dispatch initialisation for UserDataContext
  const [udState, udDispatch] = useUserData();
  const { hasDataLoaded } = udState;
  // Redux dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      //*** For testing only */
      dispatch(authSlice.actions.login("987398729347293"));
      const data = await dispatch(loadDataThunk());
      // Load page when data has loaded
      udDispatch({ type: "loadData", payload: data });
    })();
  }, []);

  return (
    <UserDataContext.Provider value={[udState, udDispatch]}>
      <PageCtn>
        <Nav />
        <BoardCtn>
          <AddUserBtn />
          {hasDataLoaded && <UserList />}
        </BoardCtn>
      </PageCtn>
    </UserDataContext.Provider>
  );
}
