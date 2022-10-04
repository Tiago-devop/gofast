import {
  Title,
  Wrapper,
  CarrouselStyled,
  CarrouselStyledWrapper,
  CarrouselItemWrapper,
  Divider,
  Image,
  VideoStyled,
  VideoWrapper,
  PStyled,
} from "./Home.style";

import { hyundai, mercedes, volvo } from "../../assets/img/Caminhao";

import {
  bmw,
  gol,
  hb20,
  mobi,
  rangeRover,
  yares,
} from "../../assets/img/Carro";

import { background } from "../../assets/video";

const Home = () => (
  <>
    <Wrapper>
      <Divider style={{ height: "50px" }}></Divider>
      <Title>GoFast Auto</Title>
      <VideoWrapper>
        <VideoStyled src={background} autoPlay loop muted />
      </VideoWrapper>

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
        <PStyled style={{zIndex: '1'}}>
          A GoFast Auto é uma empresa tradicional no ramo de veículos,
          trabalhamos para manter sempre um atendimento bom e de qualidade nos
          nossos clientes. Buscando oferecer variedades de produtos.
        </PStyled>
      </CarrouselStyledWrapper>
    </Wrapper>
  </>
);

export default Home;
