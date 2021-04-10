import React from 'react';
import {render} from '@testing-library/react';

import UserList from '../index';

describe('# UserList', () => {
  test('Must render UserList component and compare changes', () => {
    const tree = render(<UserList />);
    expect(tree).toMatchSnapshot();
  });
});
