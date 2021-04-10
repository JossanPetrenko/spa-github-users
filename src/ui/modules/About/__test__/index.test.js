import React from 'react';
import {render} from '@testing-library/react';

import About from '../index';

describe('# About', () => {
  test('Must render About component and compare changes', () => {
    const tree = render(<About />);
    expect(tree).toMatchSnapshot();
  });
});
