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

import { hyundai,
mercedes,
volvo,
bmw,
gol,
hb20,
mobi,
moto150,
moto600,
motoBmw,
onibusMercedes,
onibusVolvo,
rangeRover,
yares,
} from "../../assets/img/produtos";



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
     
        <CarrouselItemWrapper>
            <Image src={bmw} />
          </CarrouselItemWrapper>
          
          <CarrouselItemWrapper>
            <Image src={gol} />
          </CarrouselItemWrapper>

          <CarrouselItemWrapper>
            <Image src={hb20} />
          </CarrouselItemWrapper>

          <CarrouselItemWrapper>
            <Image src={mobi} />
          </CarrouselItemWrapper>

          <CarrouselItemWrapper>
            <Image src={moto150} />
          </CarrouselItemWrapper>
          
          <CarrouselItemWrapper>
            <Image src={moto600} />
          </CarrouselItemWrapper>

          <CarrouselItemWrapper>
            <Image src={motoBmw} />
          </CarrouselItemWrapper>

          <CarrouselItemWrapper>
            <Image src={onibusMercedes} />
          </CarrouselItemWrapper>

          <CarrouselItemWrapper>
            <Image src={onibusVolvo} />
          </CarrouselItemWrapper>

          <CarrouselItemWrapper>
            <Image src={rangeRover} />
          </CarrouselItemWrapper>

          <CarrouselItemWrapper>
            <Image src={yares} />
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
