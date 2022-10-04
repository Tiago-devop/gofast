import styled from "styled-components";
import { Carousel } from "antd";

export const Wrapper = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  padding: 50px;
`;

export const PStyled = styled.p`
  position: relative;
  margin-top: 60px;
  font-size: 2rem;
  z-index: 1;
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  z-index: 1;
`;

export const CarrouselStyled = styled(Carousel)`
`;

export const CarrouselStyledWrapper = styled.div``;

export const CarrouselItemWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  object-fit: cover;
  margin: 0 auto;
  height: 450px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 100px;
`;

export const VideoStyled = styled.video`
  width: 100%;
  height: 100%;
`;

export const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.8;
`;
