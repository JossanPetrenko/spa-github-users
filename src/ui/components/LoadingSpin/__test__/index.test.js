import React from 'react';
import {render} from '@testing-library/react';

import LoadingSpin from '../index';

describe('# LoadingSpin', () => {
  test('Must render LoadingSpin component and compare changes', () => {
    const tree = render(<LoadingSpin />);
    expect(tree).toMatchSnapshot();
  });
});
