import { FooterStyled } from "./Footer.styles";
import { facebook, instagram, twitter } from '../../assets/img/svg';

const Footer = () => (
  <>
    <FooterStyled>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
        eveniet qui animi porro necessitatibus nulla inventore id dolorem non,
        maiores eos enim commodi ullam veritatis corrupti assumenda harum!
        Accusamus, praesentium!
      </p>
      <img src={instagram} />
      <img src={facebook} />
      <img src={twitter} />
    </FooterStyled>
  </>
);

export default Footer;
