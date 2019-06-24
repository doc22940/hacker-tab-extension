import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { sortBy } from 'lodash';

import RepositoryCard from './RepositoryCard';

const sortRepos = repos =>
  sortBy(repos, repo => 0 - repo.currentPeriodStars || 0);

const RepositoriesList = ({ repositories }) => {
  const sortedRepos = useMemo(() => sortRepos(repositories), [repositories]);

  return (
    <List>
      {sortedRepos.map(rep => (
        <Card key={rep.url}>
          <RepositoryCard {...rep} />
        </Card>
      ))}
    </List>
  );
};

RepositoriesList.propTypes = {
  repositories: PropTypes.array,
};

RepositoriesList.defaultProps = {
  repositories: [],
};

export default RepositoriesList;

const List = styled.div`
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
`;

const Card = styled.div`
  border-bottom: 1px solid #e8e8e8;
  overflow: hidden;
  :last-of-type {
    border-bottom: 0;
  }
`;