import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  font-size: 1.5rem;
  padding: 20px;

  h4 {
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    color: white;

    @media (max-width: 886px) {
      font-size: 1.5rem;
    }
  }
  h3 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    color: white;

    @media (max-width: 886px) {
      font-size: 2rem;
    }
  }

  p {

    @media (max-width: 886px) {
      font-size: 1.4rem;
    }

    @media (max-width: 634px) {
      font-size: 1.2rem;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 5rem;
  color: white;

  @media (max-width: 886px) {
      font-size: 4rem;
    }
`;