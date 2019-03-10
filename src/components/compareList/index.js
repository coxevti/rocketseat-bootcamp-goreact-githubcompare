import React from 'react';
import PropTypes from 'prop-types';

import { Container, Options, Repository } from './style';

const CompareList = ({ repositories, repositorySync, repositoryDelete }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <Options>
          <button type="button" onClick={() => repositorySync(repository.id)}>
            <i className="fas fa-sync" />
          </button>
          <button type="button" onClick={() => repositoryDelete(repository.id)}>
            <i className="fas fa-times" />
          </button>
        </Options>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>
        <ul>
          <li>
            {repository.stargazers_count}
            <small>starts</small>
          </li>
          <li>
            {repository.forks_count}
            <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count}
            <small>issues</small>
          </li>
          <li>
            {repository.lastCommit}
            <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      lastCommit: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string,
      }),
    }),
  ).isRequired,
  repositorySync: PropTypes.func.isRequired,
  repositoryDelete: PropTypes.func.isRequired,
};

export default CompareList;
