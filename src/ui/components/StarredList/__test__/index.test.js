import React from 'react';
import {render} from '@testing-library/react';

import StarredList from '../index';

describe('# StarredList', () => {
  test('Must render StarredList component and compare changes', () => {
    const tree = render(<StarredList />);
    expect(tree).toMatchSnapshot();
  });
});
