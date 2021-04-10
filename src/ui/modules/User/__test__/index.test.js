import React from 'react';
import {render} from '@testing-library/react';

import User from '../index';

jest.mock('../../../../context/github/githubContext', () => ({
  __esModule: true,
  default: {githubContext: {}},
  githubContext: {},
}));

describe('# User', () => {
  test('Must render User component and compare changes', () => {
    const tree = render(<User />);
    expect(tree).toMatchSnapshot();
  });
});
