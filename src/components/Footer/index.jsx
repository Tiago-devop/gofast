import { FooterStyled, LinkStyled } from "./Footer.styles";
import { facebook, instagram, twitter } from "../../assets/img/svg";

const Footer = () => (
  <>
    <FooterStyled>
      <p>
        GoFast todos os direitos reservados <span>&#169;</span>
      </p>
      <LinkStyled
        href="https://www.instagram.com/soulcodeacademy/"
        target="_blank"
      >
        <img src={instagram} />
      </LinkStyled>
      <LinkStyled
        href="https://www.facebook.com/SoulCodeAcademy"
        target="_blank"
      >
        <img src={facebook} />
      </LinkStyled>
      <LinkStyled href="https://twitter.com/SoulCodeAcademy" target="_blank">
        <img src={twitter} />
      </LinkStyled>
    </FooterStyled>
  </>
);

export default Footer;
