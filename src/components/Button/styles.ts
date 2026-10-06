import styled from "@emotion/styled";

interface MyButtonProps {
  disabled?: boolean;
}

export const MyButton = styled.button<MyButtonProps>`
  /* width: 350px; */
  width: 100%;
  padding: 20px;
  background-color: rgb(18, 18, 86);
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    background-color: rgb(71, 71, 78);
    color: white;
  }
`;

// export const Component = styled.p``;
