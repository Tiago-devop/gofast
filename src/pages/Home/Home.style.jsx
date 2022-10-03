import styled from 'styled-components'
import { Carousel } from "antd";
import 'antd/dist/antd.css';


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
  width: 400px;
  height: 400px;
`;