import styled from "@emotion/styled";

export const LoginFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 500px;
  padding: 30px;
  background-color: white;
  border: 4px solid rgb(22, 10, 43);
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: rgb(22, 10, 43);
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Checkbox = styled.input``;

export const CheckboxLabel = styled.label`
  font-size: 18px;
`;
