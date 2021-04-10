import React from 'react';
import {render} from '@testing-library/react';

import NotFound from '../index';

describe('# NotFound', () => {
  test('Must render NotFound component and compare changes', () => {
    const tree = render(<NotFound />);
    expect(tree).toMatchSnapshot();
  });
});
