import styled from "styled-components/macro";

// This is shared by all Modals
const GenericBackdrop = styled.div`
  position: fixed;
  inset: 0;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.6); /* Black w/ opacity */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default GenericBackdrop;
