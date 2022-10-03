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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          minus a consequuntur atque, iusto, neque sit corrupti, omnis possimus
          porro esse modi culpa qui eum voluptates delectus vel recusandae.
          Quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          saepe, culpa ratione quidem ducimus optio sequi laudantium atque nihil
          ad dolorem perferendis distinctio odio nulla, at quam iusto ullam
          voluptatibus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptas inventore nobis laboriosam cum nesciunt minus dicta harum.
          Libero incidunt tenetur sed cupiditate! Error natus soluta quaerat
          architecto odio quisquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptas inventore nobis laboriosam cum nesciunt minus dicta harum.
          Libero incidunt tenetur sed cupiditate! Error natus soluta quaerat
          architecto odio quisquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptas inventore nobis laboriosam cum nesciunt minus dicta harum.
          Libero incidunt tenetur sed cupiditate! Error natus soluta quaerat
          architecto odio quisquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptas inventore nobis laboriosam cum nesciunt minus dicta harum.
          Libero incidunt tenetur sed cupiditate! Error natus soluta quaerat
          architecto odio quisquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptas inventore nobis laboriosam cum nesciunt minus dicta harum.
          Libero incidunt tenetur sed cupiditate! Error natus soluta quaerat
          architecto odio quisquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptas inventore nobis laboriosam cum nesciunt minus dicta harum.
          Libero incidunt tenetur sed cupiditate! Error natus soluta quaerat
          architecto odio quisquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptas inventore nobis laboriosam cum nesciunt minus dicta harum.
          Libero incidunt tenetur sed cupiditate! Error natus soluta quaerat
          architecto odio quisquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptas inventore nobis laboriosam cum nesciunt minus dicta harum.
          Libero incidunt tenetur sed cupiditate! Error natus soluta quaerat
          architecto odio quisquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptas inventore nobis laboriosam cum nesciunt minus dicta harum.
          Libero incidunt tenetur sed cupiditate! Error natus soluta quaerat
          architecto odio quisquam!
        </p>
      </main>
    </Wrapper>
  </>
);

export default Home;
