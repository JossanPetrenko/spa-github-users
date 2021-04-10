import React from 'react';

import SimpleCard from 'ui/components/SimpleCard';

import strings from 'infra/resources/strings';

function RepositorieList({repositories}) {
  return (
    <SimpleCard>
      <h1>{strings.users.repositories}</h1>
      {repositories?.map((repo, index) => (
        <div key={index}>{repo.name}</div>
      ))}
    </SimpleCard>
  );
}

export default RepositorieList;
