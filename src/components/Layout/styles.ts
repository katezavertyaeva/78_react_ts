import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: #adafdf;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: #050734;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: #adafdf;
`;

export const ButtonWrapper = styled.div`
  width: 150px;
`;
