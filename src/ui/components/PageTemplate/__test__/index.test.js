import React from 'react';
import {render} from '@testing-library/react';

import PageTemplate from '../index';

describe('# PageTemplate', () => {
  test('Must render PageTemplate component and compare changes', () => {
    const tree = render(<PageTemplate />);
    expect(tree).toMatchSnapshot();
  });
});
