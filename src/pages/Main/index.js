import React, { Component } from 'react';
import moment from 'moment';

import logo from '../../assets/logo.png';
import { Container, Form } from './style';
import CompareList from '../../components/compareList/index';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  handledRepository = async (e) => {
    e.preventDefault();
    try {
      const { repositories, repositoryInput } = this.state;
      const { data: repository } = await api.get(`repos/${repositoryInput}`);
      repository.lastCommit = moment(repository.updated_at).fromNow();
      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    const { repositories, repositoryInput, repositoryError } = this.state;
    return (
      <Container withError={repositoryError}>
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
        <span className="msgError">Repositório não encontrado...</span>
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
