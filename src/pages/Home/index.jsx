import {
  Title,
  Wrapper,
  CarrouselStyled,
  CarrouselStyledWrapper,
  CarrouselItemWrapper,
  Divider,
  Image,
} from "./Home.style";
import { hyundai, mercedes, volvo } from "../../assets/img/Caminhao";

const Home = () => (
  <>
    <Wrapper>
      <Divider></Divider>
      <Title>GoFast Auto</Title>
      <CarrouselStyledWrapper>
        <CarrouselStyled autoplay>
          <CarrouselItemWrapper>
            <Image src={hyundai} />
          </CarrouselItemWrapper>
          <CarrouselItemWrapper>
            <Image src={mercedes} />
          </CarrouselItemWrapper>
          <CarrouselItemWrapper>
            <Image src={volvo} />
          </CarrouselItemWrapper>
        </CarrouselStyled>
      </CarrouselStyledWrapper>
      <main>
        <p>
          A GoFast Auto é uma empresa tradicional no ramo de veículos,
          trabalhamos para manter sempre um atendimento bom e de qualidade nos
          nossos clientes. Buscando oferecer variedades de produtos.
        </p>
      </main>
      <Divider></Divider>
      <Divider></Divider>

    </Wrapper>
  </>
);

export default Home;
