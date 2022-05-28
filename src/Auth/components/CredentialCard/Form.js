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
  gap: 0.5rem;
`;

export const FormLabelSpan = styled.span``;

export const FormInput = styled.input`
  flex: 1;
`;
