import styled from "styled-components";
import { Carousel } from "antd";

export const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  padding: 50px;

  p {
    margin-top: 60px;
    font-size: 2rem;
  }
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
`;

export const CarrouselStyled = styled(Carousel)``;

export const CarrouselStyledWrapper = styled.div``;

export const CarrouselItemWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  object-fit: cover;
  margin: 0 auto;
  height: 400px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 100px;
`;
