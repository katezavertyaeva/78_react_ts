import { Link, useNavigate } from "react-router-dom";

import {
  ButtonWrapper,
  Footer,
  Header,
  LayoutComponent,
  Logo,
  Main,
  NavContainer,
  StyledNavLink,
} from "./styles";
import type { InputContextType, LayoutProps } from "./types";
import LogoImg from "../../assets/avatar.jpg";
import Button from "../Button/Button";
import { createContext, useState } from "react";

export const InputContext = createContext<InputContextType>({
  data: "",
  onDataChange: () => {},
});

function Layout({ children }: LayoutProps) {
  const [inputResult, setInputResult] = useState<string>("");
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <InputContext.Provider
      value={{
        data: inputResult,
        onDataChange: setInputResult,
      }}
    >
      <LayoutComponent>
        <Header>
          <Link to="/">
            <Logo src={LogoImg} />
          </Link>
          <ButtonWrapper>
            <Button name="<---" onClick={onBack} />
          </ButtonWrapper>
          <NavContainer>
            <StyledNavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Home
            </StyledNavLink>
            <StyledNavLink
              to="/lesson-06"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson06
            </StyledNavLink>
            <StyledNavLink
              to="/lesson-07"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson07
            </StyledNavLink>
            <StyledNavLink
              to="/lesson-08"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson08
            </StyledNavLink>
            <StyledNavLink
              to="/lesson-10"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson10
            </StyledNavLink>
            <StyledNavLink
              to="/homework-10"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Homework10
            </StyledNavLink>
            <StyledNavLink
              to="/lesson-12"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson12
            </StyledNavLink>
            <StyledNavLink
              to="/users"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Users
            </StyledNavLink>
            <StyledNavLink
              to="/lesson-15"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Lesson15
            </StyledNavLink>
          </NavContainer>
        </Header>
        <Main>{children}</Main>
        <Footer></Footer>
      </LayoutComponent>
    </InputContext.Provider>
  );
}

export default Layout;
