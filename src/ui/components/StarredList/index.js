import React from 'react';

import SimpleCard from 'ui/components/SimpleCard';

import strings from 'infra/resources/strings';

function StarredList({starreds}) {
  return (
    <SimpleCard>
      <h1>{strings.users.starreds}</h1>
      {starreds?.map((starred, index) => (
        <div key={index}>{starred.name}</div>
      ))}
    </SimpleCard>
  );
}

export default StarredList;
