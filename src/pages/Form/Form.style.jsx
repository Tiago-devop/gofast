import styled from "styled-components";

export const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  padding: 30px;

  label {
    text-align: center;
    margin-bottom: 10px;
    font-size: 1.5rem;
  }

  input {
    box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.5);
    margin-bottom: 15px;
    border-radius: 5px;
    margin: 0 auto;
    height: 40px;
    width: 70%;
    color: black;
    font-size: 1.5rem;
  }

  input[type="submit"] {
    box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.5);
    background-color: #8828d0;
    border-radius: 5px;
    font-size: 1.5rem;
    margin-top: 30px;
    border: none;
    height: 50px;
    color: white;

    &:hover {
      transition: all 0.5s ease-in-out;
      background-color: #3d1c63;
    }
  }
`;
