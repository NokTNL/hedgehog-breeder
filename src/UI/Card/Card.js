import styled from "styled-components/macro";

// Re-export all children components
export * from "./Header";
export * from "./Form";
export * from "./ButtonsCtn";

const Card = styled.section`
  border-radius: 2rem;
  padding: 2rem;
  background-color: white;

  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 3rem;
`;
export default Card;
