import styled from 'styled-components'
import { Carousel } from "antd";
// import 'antd/dist/antd.css';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
  padding: 50px;

  p {
    font-size: 1.5rem;
  }
`;

export const Title = styled.h1`
  color: blue;
`;

export const CarrouselStyled = styled(Carousel)`
`;

export const CarrouselStyledWrapper = styled.div`
`;

export const CarrouselItemWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  margin: 0 auto;
  width: 80%;
  height: 500px;
  object-fit: cover;
`;