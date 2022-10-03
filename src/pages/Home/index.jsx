import {
  Title,
  Wrapper,
  CarrouselStyled,
  CarrouselStyledWrapper,
  CarrouselItemWrapper,
  Image,
} from "./Home.style";
import { hyundai, mercedes, volvo } from "../../assets/img/Caminhao";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = () => (
  <>
    <Wrapper>
      <Title>HOME</Title>
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
          <CarrouselItemWrapper>
            <h3 style={contentStyle}>4</h3>
          </CarrouselItemWrapper>
        </CarrouselStyled>
      </CarrouselStyledWrapper>
      <main>
        <h2>GoFast Auto</h2>

        <p>
          Somos uma empresa tradicional no ramo de veículos, trabalhamos para
          manter sempre um atendimento bom e de qualidade nos nossos clientes.
          Buscando oferecer variedades de produtos.
        </p>
      </main>
    </Wrapper>
  </>
);

export default Home;
