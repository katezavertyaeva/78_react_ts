import Button from "../../components/Button/Button";
import { Title, UsersPage, StyledLink } from "./styles";
import { useNavigate } from "react-router-dom";

function Users() {
  // Хук возвращает функцию, при вызове которой нас может перенаправить на другую
  const navigate = useNavigate();

  const goToHomeworkPage = () => {
    navigate("/homework-10");
  };

  return (
    <UsersPage>
      <Title>Users page</Title>
      {/* <StyledLink to="/users/admin">Admin</StyledLink> */}
      <StyledLink to="admin">Admin</StyledLink>
      <Button name="Go To Homework" onClick={goToHomeworkPage} />
    </UsersPage>
  );
}

export default Users;
