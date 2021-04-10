import React from 'react';
import {render} from '@testing-library/react';

import Navbar from '../index';

describe('# Navbar', () => {
  test('Must render Navbar component and compare changes', () => {
    const tree = render(<Navbar />);
    expect(tree).toMatchSnapshot();
  });
});
