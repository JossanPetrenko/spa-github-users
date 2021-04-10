import React from 'react';
import {render} from '@testing-library/react';

import Home from '../index';

describe('# Home', () => {
  test('Must render Home component and compare changes', () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
