import React from 'react';
import ReactDOM from 'react-dom';
import AppHelmet from 'ui/components/AppHelmet';

import 'antd/dist/antd.css';
import './index.css';

import App from 'ui';

ReactDOM.render(
  <React.StrictMode>
    <AppHelmet />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
