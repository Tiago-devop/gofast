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

  @media (max-width: 540px) {
    font-size: 1.9rem;
  }
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  z-index: 1;
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
  height: 450px;

  @media (max-width: 1110px) {
    height: 300px;
  }

  @media (max-width: 886px) {
    height: 200px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 100px;

  @media (max-width: 1110px) {
    height: 0px;
  }

  @media (max-width: 886px) {
    margin-top: 50px;
  }

  @media (max-width: 540px) {
    display: none;
  }
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

  @media (max-width: 772px) {
    margin-top: 50px;
  }

  @media (max-width: 700px) {
    margin-top: 100px;
  }

  @media (max-width: 600px) {
    margin-top: 150px;
  }

  @media (max-width: 540px) {
    display: none;
  }
`;
