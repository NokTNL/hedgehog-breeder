import styled from "styled-components/macro";

const Button = styled.button`
  border: 0.1rem solid black;
  border-radius: 1em;
  padding: 0.5em 1em;

  &:hover {
    animation: button-rocking, button-enlarge;
    animation-duration: 0.5s;
  }

  &:active {
    transform: translateY(0.1rem);
  }

  @keyframes button-rocking {
    40% {
      transform: rotate(8deg);
    }
    70% {
      transform: rotate(-2deg);
    }
  }

  @keyframes button-enlarge {
    40% {
      transform: scale(1.1);
    }
  }
`;

export default Button;
