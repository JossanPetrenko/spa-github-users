import React from 'react';
import {render} from '@testing-library/react';

import GithubLink from '../index';

describe('# AppHelmet', () => {
  test('Must render GithubLink component and compare changes', () => {
    const tree = render(<GithubLink />);
    expect(tree).toMatchSnapshot();
  });
});
