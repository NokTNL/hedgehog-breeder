import styled from "styled-components/macro";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// To use it, wrap around <FormLabelSpan> & <FormInput>
export const FormEntry = ({ children }) => {
  return <FormLabel>{children}</FormLabel>;
};

const FormLabel = styled.label`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;

export const FormLabelSpan = styled.span``;

export const FormInput = styled.input`
  flex: 1;
  font-size: 0.9rem;

  &:focus {
    transition: transform 0.3s;
    transform: scale(1.05);
  }
`;
