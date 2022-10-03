import {
  Title,
  Wrapper,
  CarrouselStyled,
  CarrouselStyledWrapper,
} from "./Home.style";

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
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </CarrouselStyled>
      </CarrouselStyledWrapper>
      <main>

       <h2>GoFast Auto</h2>

       <p>Somos uma empresa tradicional no ramo de veículos, trabalhamos para manter sempre um atendimento bom e de qualidade nos nossos clientes. Buscando oferecer variedades de produtos.</p>
       
      </main>
    </Wrapper>
  </>
);

export default Home;
