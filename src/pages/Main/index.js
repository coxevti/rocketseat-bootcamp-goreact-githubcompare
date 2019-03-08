import React, { Component } from 'react';

import logo from '../../assets/logo.png';
import { Container, Form } from './style';
import CompareList from '../../components/compareList/index';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  };

  handledRepository = async (e) => {
    e.preventDefault();
    try {
      const { repositories, repositoryInput } = this.state;
      const repository = await api.get(`repos/${repositoryInput}`);
      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository.data],
      });
    } catch (error) {
      console.warn(error);
    }
  };

  render() {
    const { repositories, repositoryInput } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare logo" />
        <Form onSubmit={this.handledRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Ok</button>
        </Form>
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
