import { useEffect } from "react";
import UserDataContext, { useUserData } from "./UserDataContext";

import styled from "styled-components/macro";
import Nav from "./Nav/Nav";
import AddUserBtn from "./AddUserBtn/AddUserBtn";
import UserList from "./UserList/UserList";
import loadDataThunk from "./loadDataThunk";
// import authSlice from "../Auth/authSlice";

const PageCtn = styled.main`
  height: 100%;
  display: flex;

  @media (max-width: 40rem) {
    flex-direction: column;
  }
`;
const BoardCtn = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  // Create its own stacking context so 1. always go below the modal, and 2. Still let AddUserBtn goes above UserList
  isolation: isolate;

  // This container is scrollable for overflowing <UserList>, but <AddUserBtn> will be sticky
  overflow-y: scroll;
`;

export default function AdminBoard() {
  // Top level state & dispatch initialisation for UserDataContext
  const [udState, udDispatch] = useUserData();
  const { hasDataLoaded } = udState;

  useEffect(() => {
    (async () => {
      //*** For testing only */
      // dispatch(authSlice.actions.login("987398729347293"));
      const data = await loadDataThunk();
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
