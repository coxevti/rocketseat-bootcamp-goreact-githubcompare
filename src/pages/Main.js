import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

const Form = styled.form`
  margin-top: 25px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    border-radius: 30px 0px 0px 30px;
    color: #333;
  }

  button {
    height: 50px;
    padding: 0 20px;
    background: #f3f3f3;
    border: 0;
    font-size: 18px;
    border-radius: 0px 30px 30px 0px;
    color: #333;
    &:hover {
      cursor: pointer;
      background: #ccc;
      color: #fff;
    }
  }
`;

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare logo" />
    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">Ok</button>
    </Form>
  </Container>
);

export default Main;