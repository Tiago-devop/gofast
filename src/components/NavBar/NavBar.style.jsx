import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: grey;
  display: flex;
  justify-content: flex-start;
`;

export const LinkWrapper = styled.ul`
  justify-content: center;
  list-style-type: none;
  align-items: center;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const ItemWrapper = styled.li``;

export const LinkStyled = styled(Link)`
  box-shadow: 0px 0px 30px -2px rgba(0,0,0,0.10);
  text-decoration: none;
  font-size: 1.5rem;
  margin: 0 10px;
  display: block;
  padding: 30px;
  color: white;

  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: blue;
  }
`;

export const Logo = styled.img`
  margin-right: auto;
  height: 88px;
`;