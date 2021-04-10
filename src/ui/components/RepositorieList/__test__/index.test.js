import React from 'react';
import {render} from '@testing-library/react';

import RepositorieList from '../index';

describe('# RepositorieList', () => {
  test('Must render RepositorieList component and compare changes', () => {
    const tree = render(<RepositorieList />);
    expect(tree).toMatchSnapshot();
  });
});
