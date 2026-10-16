import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const UsersPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 40px;
  flex: 1;
  background-color: rgb(205, 225, 229);
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: rgb(13, 33, 63);
`;

export const StyledLink = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  color: rgb(18, 50, 99);
`;
