import React from 'react';
import {} from 'antd';

import colors from 'infra/resources/colors';
import strings from 'infra/resources/strings';

function RepositorieList({repositories}) {
  return (
    <>
      {repositories?.map((repo, index) => (
        <div key={index}>{repo.name}</div>
      ))}
    </>
  );
}

export default RepositorieList;
