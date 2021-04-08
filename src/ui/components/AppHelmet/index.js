import React from 'react';

import {Helmet} from 'react-helmet';

import configs from 'infra/configs';
import strings from 'infra/resources/strings';

function AppHelmet() {
  return (
    <>
      <Helmet>
        <meta charSet={configs.charSet} />
        <title>{strings.app.helmet}</title>
      </Helmet>
    </>
  );
}

export default AppHelmet;
