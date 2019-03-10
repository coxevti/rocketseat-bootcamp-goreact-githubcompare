import React, { Component } from 'react';
import moment from 'moment';

import logo from '../../assets/logo.png';
import { Container, Form } from './style';
import CompareList from '../../components/compareList/index';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryAlready: false,
    repositoryInput: '',
    repositories: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    this.setState({ loading: false, repositories: await this.getLocalRepositories() });
  }

  getLocalRepositories = async () => JSON.parse(await localStorage.getItem('repositories')) || [];

  handledRepository = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, repositoryAlready: false });
    try {
      const { repositories, repositoryInput } = this.state;
      const { data: repository } = await api.get(`repos/${repositoryInput}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      const pos = repositories.filter(id => id.id === repository.id);
      if (pos.length === 0) {
        localStorage.setItem('repositories', JSON.stringify([...repositories, repository]));
        this.setState({
          repositoryInput: '',
          repositories: [...repositories, repository],
          repositoryError: false,
        });
      } else {
        this.setState({ repositoryAlready: true, repositoryError: true });
      }
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handledSync = async (id) => {
    const { repositories } = this.state;
    const repository = repositories.find(item => item.id === id);
    try {
      const { data } = await api.get(`repos/${repository.full_name}`);
      data.lastCommit = moment(data.pushed_at).fromNow();
      this.setState({
        repositories: repositories.map(repo => (repo.id === data.id ? data : repo)),
      });
      await localStorage.setItem('repositories', JSON.stringify(repositories));
    } catch (error) {
      console.log(error);
    }
  };

  handledDelete = async (id) => {
    const { repositories } = this.state;
    const updateRepository = repositories.filter(item => item.id !== id);
    this.setState({ repositories: updateRepository });
    await localStorage.setItem('repositories', JSON.stringify(updateRepository));
  };

  render() {
    const {
      repositories,
      repositoryInput,
      repositoryError,
      loading,
      repositoryAlready,
    } = this.state;
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
          <button type="submit">
            {loading ? <i className="fas fa-spinner fa-pulse" /> : 'Ok'}
          </button>
        </Form>
        <span className="msgError">
          {repositoryAlready ? 'Repositório já adicionado.' : 'Repositório não encontrado.'}
        </span>
        <CompareList
          repositories={repositories}
          repositorySync={this.handledSync}
          repositoryDelete={this.handledDelete}
        />
      </Container>
    );
  }
}
