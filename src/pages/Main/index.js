import React from 'react';

import logo from '../../assets/logo.png';
import { Container, Form } from './style';
import CompareList from '../../components/compareList/index';

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare logo" />
    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">Ok</button>
    </Form>
    <CompareList />
  </Container>
);

export default Main;
