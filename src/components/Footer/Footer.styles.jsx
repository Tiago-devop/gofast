import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 20px;
  position: absolute;
  bottom: 0;
  background-color: #8828d0;
  display: flex;
  justify-content: flex-start;
  box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.1);

  img {
    margin: 0 10px;
    cursor: pointer;
  }

  p {
    margin-right: auto;
    margin-bottom: 0;
    font-size: 1.5em;
  }
`;

export const LinkStyled = styled.a`
  text-decoration: none;
  margin-right: 10px;
`;
