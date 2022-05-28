import styled from "styled-components/macro";

// Below are all usable children UI wrappers
export const Header = styled.h3``;

export * from "./Form";
export * from "./ButtonsCtn";

// Main card
const CredentialCard = styled.section`
  border: 0.1rem solid black;
  border-radius: 2rem;
  padding: 2rem;
  background-color: white;

  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export default CredentialCard;
