import { Title, Wrapper } from "./Home.style";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const mierda = {
  width: "400px",
}

const Home = () => (
  <>
    <Wrapper>
      <Title>HOME</Title>
      <div style={mierda}>
      <Carousel autoplay>
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
      </Carousel>
      </div>
      <main>

       <h2>GoFast Auto</h2>

       <p>Somos uma empresa tradicional no ramo de veículos, trabalhamos para manter sempre um atendimento bom e de qualidade nos nossos clientes. Buscando oferecer variedades de produtos.</p>
       
      </main>
    </Wrapper>
  </>
);

export default Home;
