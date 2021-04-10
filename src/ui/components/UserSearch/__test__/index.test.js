import React from 'react';
import {render} from '@testing-library/react';

import UserSearch from '../index';

describe('# UserSearch', () => {
  test('Must render UserSearch component and compare changes', () => {
    const tree = render(<UserSearch />);
    expect(tree).toMatchSnapshot();
  });
});
