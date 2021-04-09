import React from 'react';
import {} from 'antd';

import colors from 'infra/resources/colors';
import strings from 'infra/resources/strings';

function StarredList({starreds}) {
  return (
    <>
      {starreds.map((starred, index) => (
        <div key={index}>{starred.name}</div>
      ))}
    </>
  );
}

export default StarredList;
