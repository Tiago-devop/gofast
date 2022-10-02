import {
  Wrapper,
  LinkWrapper,
  ItemWrapper,
  LinkStyled,
  Logo,
} from "./NavBar.style";
import logo from "../../assets/img/gofast.jpeg";

const NavBar = () => (
  <>
    <Wrapper>
      <Logo src={logo} />
      <LinkWrapper>
        <ItemWrapper>
          <LinkStyled to={"/"}>Home</LinkStyled>
        </ItemWrapper>
        <ItemWrapper>
          <LinkStyled to={"/about"}>About</LinkStyled>
        </ItemWrapper>
        <ItemWrapper>
          <LinkStyled to={"/form"}>Form</LinkStyled>
        </ItemWrapper>
      </LinkWrapper>
    </Wrapper>
  </>
);

export default NavBar;
