import React from 'react';
import {Tooltip} from 'antd';

import colors from 'infra/resources/colors';
import strings from 'infra/resources/strings';

function GithunLink({login, children}) {
  return (
    <>
      <Tooltip
        title={strings.users.github_tooltip}
        color={colors.blue500}
        placement={'top'}>
        <a
          target="_blank"
          style={{cursor: 'pointer'}}
          href={`https://github.com/${login}`}
          rel="noreferrer">
          {children}
        </a>
      </Tooltip>
    </>
  );
}

export default GithunLink;
