import {
  Footer,
  Header,
  LayoutComponent,
  Logo,
  Main,
  NavContainer,
  StyledNavLink,
} from "./styles";
import type { LayoutProps } from "./types";
import LogoImg from "../../assets/avatar.jpg";

function Layout({ children }: LayoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <Logo src={LogoImg} />
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
            to="/lesson-10"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson10
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-12"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson12
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </LayoutComponent>
  );
}

export default Layout;
